const WebSocket = require('ws');
const WS_URL = 'ws:///192.168.1.121:8888';
const ws = new WebSocket(WS_URL);

const WS_URL2 = 'ws:///192.168.1.121:8881';
const ws2 = new WebSocket(WS_URL2);

// El modulo mqtt nos permite crear un cliente ya sea un publicador o un subscritor
const mqtt = require('mqtt');

// el cliente (subscritor) se conecta al servidor broker
// no se utiliza http si no mqtt 
const sub = mqtt.connect('mqtt://localhost:9001');

sub.on("connect",()=>{
    // el sub se inscribe a la plubicacion con titulo: "topic test"
    sub.subscribe('Topic test');
});


// funcion para enviar una mensaje 
var funcion12 = setInterval(function enviarMensaje() {
    console.log(new Date().toLocaleTimeString());
        console.log("Mandando mensaje")
         ws.send("Hola");
},1000*10);


var contador = 0;
var funcion13 = setTimeout(function enviarMensaje() {
    if (contador != 0) {
        console.log(new Date().toLocaleTimeString());
        console.log("Mandando primera foto")
        ws.send("Hola");
    }
},100);



// el evento message recibe todos los datos enviados del publicador
// este recibe tanto el titulo como el mensaje de la publicacion 
sub.on("message",(topic,mensaje)=>{
    // imprimimos los datos entregados 
    //  console.log(mensaje.toString());

    if (mensaje.toString() == 1) {
            funcion12;
            ++contador;
            funcion13;     
    }else{
        // console.log(mensaje.toString());
        // funcion2;
        funcion12.refresh();
        funcion13.refresh(); 
    }

          
});

// ws2.on('message', function message(data) {
//     data.toJSON();
//     // if (data.indexOf(".jpg") != -1) {
//             console.log('received: %s', data," de tipo ",typeof(data));
//     // }


//   });


module.exports = sub;