const HandleMessageChange = (io)=>{
    io.on('connect', (socket)=>{
        io.emit('resend','hello this is socekt')
        socket.on('send',(text)=>console.log(text))
    })
}
module.exports = HandleMessageChange;