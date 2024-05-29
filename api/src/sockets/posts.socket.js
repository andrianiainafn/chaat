const HandlepostChange = (io)=>{
  io.on('connect', (socket)=>{
      socket.on("sendPosts" , (pots)=>{
        console.log(pots)
        io.emit("getPosts",{
          pots
        })
      })
      socket.on("disconnect", ()=>{
        console.log('user disconnected')
      });
      socket.on('addReaction',(reaction)=>{
        io.emit('getReaction',{
          reaction
        })
      })
  })
}

module.exports = HandlepostChange






