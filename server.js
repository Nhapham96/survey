const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const PORT = 8000;
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
}) 
const io = require('socket.io')(server);   
io.on('connection', function (socket) { //2
  
  // socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  // socket.on('thankyou', function (data) { //7
  //   console.log(data.msg); //8 (note: this log will be on your server's terminal)
  // });
  socket.on('post',function(data){
   random=Math.floor(Math.random() * 1000) + 1;
  console.log(random)
  socket.emit('show',{info:data.info,random:random})
  console.log(data.info)
  });
});
require("./server/config/routes")(app);


