const HandleMessageChange = (io)=>{
    io.on('connect', (socket)=>{
        socket.on('addUser', (user)=>console.log(user,"this is socket"))
    })
}
module.exports = HandleMessageChange;