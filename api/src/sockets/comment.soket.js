const HandleCommentChange = (io)=>{
    io.on('connect',(socket)=>{
        io.on('connect', (socket)=>{
            socket.on("sendComments" , (comments)=>{
              console.log(comments)
              io.emit("getComments",{
                comments
              })
            })
            socket.on('addreaction',(reaction)=>{
                io.emit('getReaction',{
                    reaction
                })
            })
            socket.on("disconnect", ()=>{
              console.log('user disconnected')
            });
        })
    })
}