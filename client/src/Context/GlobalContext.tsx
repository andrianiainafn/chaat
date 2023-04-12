import {createContext, PropsWithChildren, useEffect, useState}  from 'react'
import axios from 'axios'

const AuthContext = createContext({}); 
function GlobalContext({children}: PropsWithChildren) {
  const[connected,setConnected] = useState<Boolean>()
  const getConnection = async()=>{
    const connection = await axios.get('http://localhost:8000/auth/verify')
    console.log(connection)
    if(connection.status === 200){
      setConnected(connection.data.connected)
    }
  }
  useEffect(()=>{
    getConnection()
  },[])
  return (
    <AuthContext.Provider value={{connected}}>
        {children}
    </AuthContext.Provider>
  )
}

export default GlobalContext