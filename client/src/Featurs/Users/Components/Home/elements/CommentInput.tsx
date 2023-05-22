import React, { ChangeEvent, useEffect, useState } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

type Props = {}

const CommentInput = (props: Props) => {
  const [comment,setComment] = useState<String>('')
  const HandleChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setComment(e.target.value)
  }
  const addCommments = async()=>{
    await axios.post('http://localhost:8000/comment/add')
  }
  const queryKey = ['addcomments']
  const {isLoading,data} = useQuery(queryKey,addCommments)
  useEffect(()=>{
    if(!isLoading){
      console.log(data)
    }
  },[isLoading])
  return (
    <div className="bg-[#2c3a4a] p-3 fixed  bottom-0 h-[14vh] justify-between w-[50%] flex  z-20 ">
        <div className="flex-col space-y-2">
          <div className="flex space-x-2 text-[#f2f2f2] items-center">
            <FavoriteOutlinedIcon className='text-[#ec6b60]'/>
            <ModeCommentOutlinedIcon/>
            {/* <ShareOutlinedIcon/> */}
          </div>
          <div className="">
            <span className='text-[#f2f2f2] font-semibold'> 1 235 j'aime</span>
          </div>
        </div>
        <AddReactionOutlinedIcon className='text-[#f2f2f2]'/>
        <div className="overflow-hidden border-[2px] rounded-3xl h-[9vh] relative  border-[#444] flex justify-center items-center p-2">
          <textarea className='bg-transparent outline-none w-[14vw] p-2 text-[#f2f2f2] '  placeholder='Add comments...'/>
        </div>
        <button className="border-[2px] text-[#f2f2f2] rounded-3xl h-[9vh] px-2 border-[#444] flex justify-center items-center space-x-1">
          <span className='text-base'>Publier</span>
          <SendIcon />
        </button>
    </div>
  )
}

export default CommentInput