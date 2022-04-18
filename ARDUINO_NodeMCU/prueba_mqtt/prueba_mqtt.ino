// Prueba de sensor Pir 

int ilu = 255;   // variable para el LED iluminación  0~255

void setup() {
  Serial.begin(9600);
  pinMode(8, INPUT);  // PIR a pin 8
  pinMode(9, OUTPUT); // ilu a pin 9
}

void loop() {
  Serial.println(digitalRead(8));
  
  if (digitalRead(8) == HIGH) {
    if (ilu < 255) ilu++ ; 
     
    
// sensor pir encendido
  }
  else {
    if (ilu > 0) ilu--;
//of
  }

  analogWrite(9, ilu); // LED 
  
}
