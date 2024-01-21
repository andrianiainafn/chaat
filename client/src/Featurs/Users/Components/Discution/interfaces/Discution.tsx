import { Avatar, Badge, styled } from '@mui/material'
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import ResponsiveSidBar from '../Element/ResponsiveSidBar';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import DiscuEntete from '../Element/DiscuEntete';
import AuthContext from '../../../../../Context/GlobalContext';
import Message from '../Element/Message';
import {io} from 'socket.io-client'
import { BASEURL } from '../../../../../Components/BaseLink';
import { useCookies } from 'react-cookie';

type Props = {}

const Discution = (props: Props) => {
  const [cookie] = useCookies()
  const [showDiscu,setShowDiscu] = useState<boolean>(true)
  const [destination,setDestination] = useState<string>()
  const [message,setMessage] = useState<string>('')
  const [arrivalMessage,setArrivlMessage] = useState<any>(null)
  const {userId} = useContext(AuthContext)
  const location = useLocation()
  const queryClient = useQueryClient()
  const idConversation = location.pathname.split('/')[3]
  const queryKey = ['message',idConversation]
  const queryInfoKey = ['inforamtion', idConversation]
  const scrollref = useRef<HTMLDivElement | null>(null)
  const socket = useRef(io( BASEURL, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
  }))
  
  
  const getConversationInfo = async()=>{
    const info = await axios.get(`${BASEURL}/conversation/getconversationinformation/${idConversation}`,{
      headers:
      {
        'Authorization': `Bearer ${cookie.name}`,
        'Content-Type': 'application/json',
      }
    })
    return info.data.message
  }
  const getMessage = async()=>{
    const  messages = await axios.get(`${BASEURL}/message/get/${idConversation}`,{
      headers:
      {
        'Authorization': `Bearer ${cookie.name}`,
        'Content-Type': 'application/json',
      }
    })
    return messages.data.message
  }
  const queryDiscu=['discutions']
  const getdiscution = async ()=>{
    const discution  = await axios.get(`${BASEURL}/message/discu`,{
      headers:
      {
        'Authorization': `Bearer ${cookie.name}`,
        'Content-Type': 'application/json',
      }
    })
    return discution.data.message
  }

  const {isLoading,data} = useQuery(queryKey,getMessage)
  const {isLoading:infoLoading,data:information} = useQuery(queryInfoKey,getConversationInfo)
  const getDestination = ()=>{
    if(information.author._id === userId){
        setDestination(information.destination._id)
    }else{
      setDestination(information.author._id)
    }
  }
  const {isLoading: discuLoad,data: dataDiscu} = useQuery(queryDiscu,getdiscution)
  useEffect(()=>{
    !discuLoad && console.log(dataDiscu)
  },[dataDiscu])


  useEffect(()=>{
    !infoLoading && getDestination()
  },[infoLoading])
  const HandleMessageChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setMessage(e.target.value)
  }
  const HandleClickSend = async()=>{
    const info = {
      message,
      destination
    }
    socket.current.emit("sendMessage",{
      sender_id: userId,
      receive_id: destination,
      text: message
    })
     const send = await axios.post(`${BASEURL}/message/add/${idConversation}`,info,{
      headers:
      {
        'Authorization': `Bearer ${cookie.name}`,
        'Content-Type': 'application/json',
      }
     })
     if(send.status === 200) { 
      queryClient.invalidateQueries(['message',idConversation])
      console.log('message sent successfully')
      setMessage('')
    }else{
      console.log(send)
    }
  }
  const ClickDiscu = () =>{
    setShowDiscu(ancien=>!ancien)
  }
  useEffect(()=>{
    scrollref.current?.scrollIntoView({behavior: "smooth"})
  },[data])
  useEffect(()=>{
    socket.current.emit("addUser", userId)
    userId && socket.current.on('getuser',(users)=>console.log(users))
  },[userId])
  useEffect(()=>{
    socket.current.on("getMessage",(newMessage)=>{
        setArrivlMessage({
          sender_id: newMessage.userId,
          text: newMessage.text,
          createdAt: Date.now()

        })
    })
  },[])
  useEffect(()=>{
    queryClient.invalidateQueries(['message',idConversation])
  },[arrivalMessage])
  return (
      <>
        {
          !idConversation ? (
              <div>
                <p>Add friends  to start conversation !</p>
              </div>
          ): (
              <>
                {
                    showDiscu && (
                        <ResponsiveSidBar open={showDiscu} ClickDiscu={ClickDiscu} dicu={dataDiscu} />
                    )
                }
                {
                  infoLoading ?(
                      <p>Loading...</p>
                  ):(
                      <DiscuEntete ClickDiscu={ClickDiscu} information={information}/>
                  )
                }
                <div className='fixed md:right-4  h-[85vh] overflow-y-scroll bg-[#17202a] md:w-[55vw] w-full  py-2 '>
                  {
                    isLoading ? (
                        <h3>Loading</h3>
                    ):(
                        <>
                          {
                            data.length === 0 ? (
                                <div className="mt-[8vh] flex flex-col items-center justify-center space-y-3">
                                  <Avatar sx={{height:'14vh',width:'8vw'}}/>
                                  <h3 className='text-white text-lg'>Anya Forger</h3>
                                  <h6 className='text-white text-base opacity-80'>Say Hello to Anya Forger <span className='animate-spin text-xl'>&#x1F44B;</span></h6>
                                  <Link to={``} className='text-base text-[#4480ce] hover:underline hover:text-white' >View profile</Link>
                                </div>
                            ):(
                                <>
                                  <div className="mt-[8vh] "/>
                                  {
                                    data.map((mess:any,key:number)=>(
                                        <div className="" key={key} ref={scrollref}>
                                          <Message mess={mess}  />
                                        </div>
                                    ))
                                  }
                                </>
                            )
                          }
                        </>
                    )
                  }
                  <div className='mt-[14vh] md:mt-[9vh]'/>
                </div>
                <div className="bottom-0 md:bottom-8 h-[8vh] bg-[#17202a]  w-full md:w-[30vw] md:space-x-3 md:justify-center fixed flex justify-between">
                  <div className=" w-[50%] flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444] overflow-hidden">
                    <input onChange={HandleMessageChange} value={message} type='text' className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Your message..' />
                    <AddReactionOutlinedIcon className='text-[#fefefe]'/>
                  </div>
                  <button onClick={HandleClickSend} className=' w-[40%] flex justify-center items-center bg-[#2c3a4a] text-sm space-x-2 text-[#f2f2f2] px-2 border-[1px] border-[#444] rounded-full '>
                    <h6>Send Message</h6>
                    <SendIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
                  </button>
                </div>
              </>
          )
        }

      </>
  )
}

export default Discution