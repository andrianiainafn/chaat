import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query';
import AuthContext from '../../../../../Context/GlobalContext';
import { IconButton } from '@mui/material';
import { BASEURL } from '../../../../../Components/BaseLink';
import { useCookies } from 'react-cookie';

type Props = {
  postId: String,
  inputRef: any
}

const CommentInput = (props: Props) => {
  const queryClient = useQueryClient()
  const reaction :Array<string> | undefined = queryClient.getQueryData(['reaction',props.postId])
  const [comment,setComment] = useState<string>('')
  const [cookie] = useCookies()
  const {userId} = useContext(AuthContext)
  const HandleChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setComment(e.target.value)
  }
  const info = {
    post: props.postId,
    description: comment,
  }
  const HandleClickReaction = async(e: any)=>{
    const postId = e!.currentTarget.getAttribute('data-postid')
    console.log(postId,9077)
    const response = await axios.put(`${BASEURL}/post/reaction/${postId}`,{
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    if(response.status === 200){
        console.log(response.data,9696)
        queryClient.invalidateQueries(['reaction',postId])
      }else{
        console.log(response,666)
      }
    }
    const addCommments = async()=>{
      console.log('test test test test')
      const data = await axios.post(`${BASEURL}/comment/add`,info,{
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie.name}`
        }
      })
      if(data.status === 200){
        console.log('comment created')
        setComment('')
        queryClient.invalidateQueries( ['comment',props.postId])
    }else{
      console.log('error when comment creation')
    }
  }
  useEffect(()=>{
    console.log(reaction)
  },[])
  return (
    <div className="bg-[#2c3a4a] p-3 fixed  bottom-0 h-[14vh] justify-between md:w-[50%] w-[100%] flex  z-20 ">
        <div className="flex-col space-y-2 w-[8vw]">
          <div className="flex space-x-1 md:space-x-2 text-[#f2f2f2] items-center cursor-pointer">
            {
              reaction?.includes(userId) ? (
                <IconButton   onClick={HandleClickReaction} data-postid={props.postId}>
                  <FavoriteOutlinedIcon className='text-[#ec6b60] cursor-pointer'/>
                </IconButton>
              ):(
                <IconButton onClick={HandleClickReaction} data-postid={props.postId}>
                  <FavoriteBorderOutlinedIcon className='text-[#efefef] cursor-pointer'/>
                </IconButton>
              )
            }
            <ModeCommentOutlinedIcon/>
            {/* <ShareOutlinedIcon/> */}
          </div>
          <div className="">
            <span className='text-[#f2f2f2] font-semibold text-sm md:text-base'> {
                reaction?.length
            } loves
            </span>
          </div>
        </div>
        <AddReactionOutlinedIcon className='text-[#f2f2f2]'/>
        <div className="overflow-hidden border-[2px] rounded-3xl h-[9vh] relative  border-[#444] flex justify-center items-center p-2">
          <textarea onChange={HandleChange} ref={props.inputRef} className='bg-transparent w-[35vw] outline-none md:w-[14vw] p-2 text-[#f2f2f2] ' value={comment}  placeholder='Add comments...'/>
        </div>
        <button onClick={addCommments} className="border-[2px] text-[#f2f2f2] rounded-3xl h-[9vh] px-2 border-[#444] flex justify-center items-center space-x-1">
          <span className='text-base'>Publier</span>
          <SendIcon />
        </button>
    </div>
  )
}

export default CommentInput