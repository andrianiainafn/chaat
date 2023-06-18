import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Conversation from './Conversation';

type Props = {
     dicu: any,
    open: boolean,
    ClickDiscu:()=>void
}

const ResponsiveSidBar = (props: Props) => {
  const discution = [1,2,3,4,5,6,7,8,9,10]
  return (
  <div onClick={(e)=>e.stopPropagation()} className='overlayDiscu block md:hidden   bg-[#17202a] w-[100vw]  text-[#f2f2f2]   overflow-scroll h-[100vh] '>
    <div className="flex flex-col space-y-3 ">
        <div className="flex justify-between items-center w-[100%]">
          <h3 className='text-[#444]'>Your Discutions</h3>
          <IconButton onClick={props.ClickDiscu}>
            <CloseIcon sx={{color:'#444'}}/>
          </IconButton>
        </div>
        <div className="hidden md:flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444]">
            <input className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Search Discution..' type='text' />
            <SearchOutlinedIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
        </div>
    </div>
    <div className='bg-[#2c3a4a] mt-4 h-[1px] w-[80%] flex justify-center items-center mx-auto  ' />
    <div className="mt-10"/>
    {
        discution.map((message)=>(
            <Conversation key={message}/>
        ))
    }
    </div>
  )
}

export default ResponsiveSidBar