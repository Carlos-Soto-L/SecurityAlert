// Security Alert
//Versión 2

#include <ESP8266WiFi.h> 
#include <WiFiClientSecure.h>
#include <UniversalTelegramBot.h>
#include <ArduinoJson.h>

//Sonido Alarma
int frecmin = 1000;
int frecmax = 2000;

// Ingresamos el SSID y Password de nuestra red WI-FI
const char* ssid = "George's Galaxy A50";
const char* password = "wxho7505";

// iniciamos el Bot de Telegram ingresando el Token que recibimos de Botfather
#define BOTtoken "5226046754:AAFeHccqYw5gsACs9_ZDewQrMEEYB38dz8Q"  

// Ingresamos el ID que recibimos del Chat con IDBot
#define CHAT_ID "5230558144"
#define CHAT_ID1 "1946959405"
#define CHAT_ID2 "1912799418"
#define CHAT_ID3 "5153532075"
#define CHAT_ID4 "5033666664"




X509List cert(TELEGRAM_CERTIFICATE_ROOT);
WiFiClientSecure client;
UniversalTelegramBot bot(BOTtoken, client);

const int led = D6; //pin del led
int pinAlarma = D1; // pin del parlante
int i; 
const int movimSensor = D5; // Pin para el sensor de movimiento
bool motionDetected = false; // desde el principio la alarma debe estar en falso para evitar que suene al Iniciar el circuito

// si se detecta un movimiento es llamada esta parte del codigo. 
ICACHE_RAM_ATTR void detectaMovimiento() {
  //Serial.println("MOTION DETECTED!!!");
  motionDetected = true;
  digitalWrite(led, 1);

  //Se activa la alarma
  for (i = frecmin; i <= frecmax; i++){
    tone(pinAlarma, i); 
  }
  for (i = frecmax; i >= frecmin; i--){
    tone(pinAlarma, i);
  }
}

void setup() {
  Serial.begin(115200);
  configTime(0, 0, "pool.ntp.org");      // obtenemos la Hora UTC via NTP
  client.setTrustAnchors(&cert); // Agregamos el certificado Raiz de api.telegram.org

  // colocamos el sensor PIR en modo INPUT_PULLUP
  pinMode(movimSensor, INPUT_PULLUP);
  // establecemos el pin movimSensor como interrupcion, asignamos la interrupcion en modo RISING 
  attachInterrupt(digitalPinToInterrupt(movimSensor), detectaMovimiento, RISING);

  // conexion con la red WI-FI:
  Serial.print("Connecting Wifi: ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  bot.sendMessage(CHAT_ID, "Bot started up", "");
  bot.sendMessage(CHAT_ID1, "Bot started up", "");
  bot.sendMessage(CHAT_ID2, "Bot started up", "");
  bot.sendMessage(CHAT_ID3, "Bot started up", "");
  bot.sendMessage(CHAT_ID4, "Bot started up", "");
}

void loop() {
  if(motionDetected){
    bot.sendMessage(CHAT_ID, "Se Detecto un Movimiento, VERIFICA LA APLICACIÓN!!", "");
    bot.sendMessage(CHAT_ID1, "Se Detecto un Movimiento, VERIFICA LA APLICACIÓN!!", "");
    bot.sendMessage(CHAT_ID2, "Se Detecto un Movimiento, VERIFICA LA APLICACIÓN!!", "");
    bot.sendMessage(CHAT_ID3, "Se Detecto un Movimiento, VERIFICA LA APLICACIÓN!!", "");
    bot.sendMessage(CHAT_ID4, "Se Detecto un Movimiento, VERIFICA LA APLICACIÓN!!", "");
    Serial.println("Movimiento Detectado");
    motionDetected = false;
    digitalWrite(led, 0);

    //Alarma apagada
    noTone(pinAlarma);
  }
}
