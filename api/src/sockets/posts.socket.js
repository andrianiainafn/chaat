const HandlepostChange = (io)=>{
  io.on('connect', (socket)=>{
    io.emit('welcom','hello this is socekt')
    socket.on('hello',(text)=>console.log(text))
    //Send and get Publication
    socket.on('SendPublication',(pub)=>{
      console.log(pub)
      io.emit('GetPublication', pub)
  })
})
}

module.exports = HandlepostChange




// io.on('connection',(socket)=>{
//   console.log('user connected')
//   io.emit('welcom','hello this is socekt')
  
//   //Send and get Publication
//   socket.on('SendPublication',(pub)=>{
//       console.log(pub)
//       io.emit('GetPublication', pub)
//   })
//   //send and get Comments
//   socket.on('SendComment',(comment)=>{
//     console.log(comment)
//     io.emit("GetComment", comment)
//   })
  
// })

