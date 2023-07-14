import {createContext, PropsWithChildren, useEffect, useState}  from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

interface IthemeContext {
  connected: boolean,
  profilepicture: string,
  firstname: string,
  lastname: string,
  userId: string,
  getConnection: () => void

}
const AuthContext = createContext<IthemeContext>({
  userId:'',
  connected: false,
  profilepicture: '',
  firstname: '',
  lastname: '',
  getConnection: () => {},
});

function GlobalContext({children}:PropsWithChildren) {
  const [connected,setConnected] = useState(false)
  const [profilepicture,setProfilePicture] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [userId,setUserId] = useState('')
  const [cookie] = useCookies()
  const getConnection = async()=>{
    console.log(cookie.name)
    const connection = await axios.get('https://chaat-df6x.onrender.com/auth/verify',{
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    if(connection.status === 200){
      console.log('testConnection')
      console.log(connection.data)
      setConnected(connection.data.connected)
      setFirstname(connection.data.firstname)
      setLastname(connection.data.lastname)
      setProfilePicture(connection.data.profilepicture)
      setUserId(connection.data.userid)
    }
  }
  useEffect(()=>{
    getConnection()
    console.log(connected)
  },[])
  return (
    <AuthContext.Provider value={{getConnection,connected,profilepicture,firstname,lastname,userId}}>
        {children}
    </AuthContext.Provider>
  )
}

export  {GlobalContext}
export default AuthContext