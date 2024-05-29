let users =[]
const addUser = (user_id,socket_id)=>{
    !users.some((user)=> user.user_id ===  user_id) && 
    users.push({user_id,socket_id})
}
const removeUser = (socket_id)=>{
    users = users.filter(user=>user.socket_id !== socket_id)
}
const getUser = (user_id)=>{
    return users.find(user=> user.user_id === user_id)
}

const HandleMessageChange = (io)=>{
    io.on('connect', (socket)=>{
        socket.on('addUser', (user_id)=> addUser(user_id,socket.id))
        io.emit('getuser', users)
        
        socket.on('sendMessage',({sender_id,receive_id,text})=>{
            const user = getUser(receive_id)
            console.log(user,90909)
            if(user){
                io.to(user.socket_id).emit("getMessage",{
                    sender_id,
                    text
                })
            }

        })

        socket.on('disconnect',()=>{
            removeUser(socket.id)
            io.emit('getuser', users)
        })

    })
}
module.exports = HandleMessageChange;