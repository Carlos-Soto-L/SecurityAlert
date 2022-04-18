#include "esp_camera.h"
#include <WiFi.h>
#include <ArduinoWebsockets.h>
//FTP
#include "soc/soc.h"           // Disable brownour problems
#include "soc/rtc_cntl_reg.h"  // Disable brownour problems
#include "driver/rtc_io.h"
#include <WiFiClient.h>   
#include "ESP32_FTPClient.h"
#include <NTPClient.h> //For request date and time
#include <WiFiUdp.h>
#include "time.h"


//
// WARNING!!! Make sure that you have either selected ESP32 Wrover Module,
//            or another board which has PSRAM enabled
//

// Select camera model
//#define CAMERA_MODEL_WROVER_KIT
//#define CAMERA_MODEL_ESP_EYE
//#define CAMERA_MODEL_M5STACK_PSRAM
//#define CAMERA_MODEL_M5STACK_WIDE
#define CAMERA_MODEL_AI_THINKER

#include "camera_pins.h"



const char* ssid = "Wifimax LOZANO_2.4";
const char* password = "EEB3C3F3172389";
//const char* password = "9q6qT9CdU4";
const char* websocket_server_host = "192.168.1.121";
const uint16_t websocket_server_port = 8888;
const uint16_t websocket_server_port2 = 8881;

//FTP
char* ftp_server = "ftpupload.net";
char* ftp_user = "epiz_31244729";
char* ftp_pass = "JOg421BYSM5";
char* ftp_path = "/htdocs/fotos/";

//FTP
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", (-3600*3), 60000);

ESP32_FTPClient ftp (ftp_server,ftp_user,ftp_pass, 5000, 2);


using namespace websockets;
WebsocketsClient client;
WebsocketsClient client2;

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 10000000;
  config.pixel_format = PIXFORMAT_JPEG;
  //init with high specs to pre-allocate larger buffers
  if(psramFound()){
    config.frame_size = FRAMESIZE_VGA;
    config.jpeg_quality = 40;
    config.fb_count = 2;
  } else {
    config.frame_size = FRAMESIZE_SVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }


  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

 

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");

  while(!client.connect(websocket_server_host, websocket_server_port, "/")){
    delay(500);
    Serial.print(".");
  }
  Serial.println("Websocket Connected! ");

    while(!client2.connect(websocket_server_host, websocket_server_port2, "/")){
    delay(500);
    Serial.print(".");
  }
  Serial.println("Websocket Client_2 Connected! ");
  
  //FTP
   //WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); //disable brownout detector
    //initCamera();

  timeClient.begin();
  timeClient.update();


  Serial.println(timeClient.getFormattedTime());

  ftp.OpenConnection();

client.onMessage(onMessageCallback);

}


void takePhoto() {

        
  camera_fb_t * fb = NULL;
  
  
  // Take Picture with Camera
  fb = esp_camera_fb_get();  
  if(!fb) {
    Serial.println("Camera capture failed");
    return;
  }

  /*
   * Upload to ftp server
   */
   ftp.OpenConnection();
    
  ftp.ChangeWorkDir(ftp_path);
  ftp.InitFile("Type I");

  String nombreArchivo = timeClient.getFormattedTime()+".jpg"; // AAAAMMDD_HHMMSS.jpg
  Serial.println("Subiendo "+nombreArchivo);
  client2.send("Foto:"+nombreArchivo+"ID_usuario:624bd775d381b5db7ebf30a8");
  int str_len = nombreArchivo.length() + 1; 
 
  char char_array[str_len];
  nombreArchivo.toCharArray(char_array, str_len);
  
  ftp.NewFile(char_array);
  ftp.WriteData( fb->buf, fb->len );
  ftp.CloseFile();

  /*
   * Free
   */
  esp_camera_fb_return(fb); 
}


// Al recibir un mensaje nuevo 
void onMessageCallback(WebsocketsMessage message) {
    Serial.print("Got Message: ");
    Serial.println(message.data());
    if(message.data()=="Hola"){
    //FTP
    timeClient.update();
    takePhoto();
  }
}


//tiempo 
 unsigned long tiempo;
 unsigned long tiempo2 = 0;

void loop() {
  tiempo = millis();
  camera_fb_t *fb = esp_camera_fb_get();
  if(!fb){
    Serial.println("Camera capture failed");
    esp_camera_fb_return(fb);
    return;
  }

  if(fb->format != PIXFORMAT_JPEG){
    Serial.println("Non-JPEG data not implemented");
    return;
  }

  client.sendBinary((const char*) fb->buf, fb->len);
  esp_camera_fb_return(fb);

   client.poll();


}
