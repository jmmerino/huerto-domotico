// http://arduino.cc/playground/ComponentLib/Thermistor2
// Math used for formula temperature calculation
#include <math.h>

// Thermistor pin
const int PHOTOCELL = 0;

// Setup serial communication
void setup()  
{
  Serial.begin( 9600 );
}

// Infinite loop
void loop()  
{
  double light = 0;
  light = map(analogRead( PHOTOCELL ),0,1023,0,90);
  Serial.println( light  );

  // Wait for next sample
  delay( 500 );
}
