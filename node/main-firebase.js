var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var Firebase = require('firebase');
var dataRef = new Firebase('https://mihuerto.firebaseio.com/luz');

var serialPort = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

serialPort.on("open", function () {
  console.log('open');

  serialPort.on('data', function(data) {
    console.log(data);

    dataRef.set(data);

  });


});