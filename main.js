/**
 * Created by WIN7 on 2018/10/25.
 */
console.log("d")
const io = require('socket.io-client');
console.log(io)

var ii=0
for(var i=0;i<5000;i++) {
    var socket2 = io.connect('http://172.31.11.251:8887/?room=111&token=uoG83UXKU3sQ&name=fasdf&userId=14', {
        transports: ['websocket']
    });
   socket2.on('connect', function (socket) {
        console.log(++ii)
    })
   socket2.on('message', function (socket) {
        console.log(socket)
    })
   socket2.on('disconnect', function (socket) {
        console.log(1)
    })

}
