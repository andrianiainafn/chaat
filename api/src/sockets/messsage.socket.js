let users =[]
const addUser = (user_id,socket_id)=>{
    !users.some((user)=> user.user_id ===  user_id) && 
    users.push({user_id,socket_id})
}
const HandleMessageChange = (io)=>{
    io.on('connect', (socket)=>{
        socket.on('addUser', (user_id)=> addUser(user_id,socket.id))
        io.emit('getuser', users)
    })
}
module.exports = HandleMessageChange;