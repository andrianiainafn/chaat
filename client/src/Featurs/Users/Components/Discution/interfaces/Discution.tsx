import { Avatar, Badge, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ResponsiveSidBar from '../Element/ResponsiveSidBar';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


type Props = {}

const Discution = (props: Props) => {
  const [showDiscu,setShowDiscu] = useState<boolean>(true)
  const location = useLocation()
  const idConversation = location.pathname.split('/')[3]
  const queryKey = ['message',idConversation]
  const getMessage = async()=>{
     const  messages = await axios.get(`http://localhost:8000/message/get/${idConversation}`)
     return messages.data.message
  }
  const{isLoading,data} = useQuery(queryKey,getMessage)
  const ClickDiscu = () =>{
    setShowDiscu(ancien=>!ancien)
  }
  console.log(idConversation)
  useEffect(()=>{
    !isLoading && console.log(data)
  },[isLoading])
  return (
    <>
    {
      showDiscu && (
          <ResponsiveSidBar open={showDiscu} ClickDiscu={ClickDiscu} />
      )
    }
    <div className="bg-[#2c3a4a] md:w-[55vw] md:right-4 overflow-x-hidden overflow-hidden  z-10  h-[8vh]  rounded-t-lg w-full flex justify-between items-center  fixed   ">
        <div className="flex space-x-2 items-center">
          <Avatar/>
          <div className="">
            <h5 className='text-[#f2f2f2] cursor-pointer hover:underline'>Anya Forger</h5>
            <div className="flex space-x-1 items-center">
              <div className="bg-[#44b700] rounded-full h-3 w-3"/>
              <h6 className='text-sm text-[#777]'>Actif</h6>
            </div>
          </div>
        </div>
        <div onClick={ClickDiscu} className="flex md:hidden items-center space-x-1 cursor-pointer">
          <h6 className='text-sm text-[#777] hover:underline'>Discu</h6>
          <ChatIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
        </div>
    </div>
    <div className='fixed md:right-4  md:h-[85vh]  bg-[#17202a] md:w-[55vw] w-full  py-2 '>
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
          <div className="mt-[8vh]"/>
            <div className="flex justify-end">
              <div className="bg-[#0099FF]  rounded-full p-2  ">
                  Heyy
              </div>
            </div>
          <div className="flex justify-start space-x-1">
            <Avatar />
            <div className=" bg-[#2c3a4a] rounded-full p-2  ">
              Heyy
            </div>
          </div>
        </>
      )
    }
        </>
      )
    }
    </div>
    <div className="bottom-20 md:bottom-8   w-full md:w-[30vw] md:space-x-3 md:justify-center fixed flex justify-between">
      <div className=" w-[50%] flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444] overflow-hidden">
              <input type='text' className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Your message..' />
              <AddReactionOutlinedIcon className='text-[#fefefe]'/>
      </div>
      <button className=' w-[40%] flex justify-center items-center bg-[#2c3a4a] text-sm space-x-2 text-[#f2f2f2] px-2 border-[1px] border-[#444] rounded-full '>
        <h6>Send Message</h6>
        <SendIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
      </button>
    </div>
    </>
  )
}

export default Discution