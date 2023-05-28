import { Avatar, Badge, styled } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ResponsiveSidBar from '../Element/ResponsiveSidBar';


type Props = {}

const Discution = (props: Props) => {
  const [showDiscu,setShowDiscu] = useState<boolean>(true)
  const ClickDiscu = () =>{
    setShowDiscu(ancien=>!ancien)
  }
  return (
    <>
    {
      showDiscu && (
          <ResponsiveSidBar open={showDiscu} ClickDiscu={ClickDiscu} />
      )
    }
    <div className="bg-[#2c3a4a] md:w-[55vw] md:right-4  right-[0.4rem] z-10  h-[8vh]  rounded-t-lg w-[95vw] flex justify-between items-center  fixed px-2 ">
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
        <div onClick={ClickDiscu} className="flex items-center space-x-1 cursor-pointer">
          <h6 className='text-sm text-[#777] hover:underline'>Discu</h6>
          <ChatIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
        </div>
    </div>
    <div className='fixed md:right-4 right-2 md:h-[85vh]  bg-[#17202a] md:w-[55vw] w-[95vw]  overflow-scroll py-2 px-4'>
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
    </div>
    <div className="bottom-16 md:bottom-4 md:w-[55vw] right-2  w-[96vw] fixed flex justify-center space-x-3">
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