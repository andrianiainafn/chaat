const io = require('socket.io')(5000,{
  cors:{
    origin: 'http://localhost:3000'
  }
});

io.on('connection',(socket)=>{
  console.log('user connected')
  io.emit('welcom','hello this is socekt')
  
  //Send and get Publication
  socket.on('SendPublication',(pub)=>{
      console.log(pub)
      io.emit('GetPublication', pub)
  })
  //send and get Comments
  socket.on('SendComment',(comment)=>{
    console.log(comment)
    io.emit("GetComment", comment)
  })
  
})

