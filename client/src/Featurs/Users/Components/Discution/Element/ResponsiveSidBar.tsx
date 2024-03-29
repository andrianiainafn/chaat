import React, { useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Conversation from './Conversation';
import axios from 'axios';
import { BASEURL } from '../../../../../Components/BaseLink';
import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';

type Props = {
     dicu: any,
    open: boolean,
    ClickDiscu:()=>void
}

const ResponsiveSidBar = (props: Props) => {
  const [cookie] = useCookies()
  const queryKey = ['getResDiscution']
  const getResDiscution = async () =>{
    const discution = await  axios.get(`${BASEURL}/message/discu`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    return discution.data.message
  }
  const {isLoading,data} = useQuery(queryKey,getResDiscution)
  useEffect(()=>{
     !isLoading && console.log(data)
  },[isLoading])
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
      isLoading ? <>
      
      </>:
       <>
        {
          data.map((discu:any,key:number)=>(
            <Conversation key={key} discu={discu} />
          ))
        }
      </>
    }
    </div>
  )
}

export default ResponsiveSidBar