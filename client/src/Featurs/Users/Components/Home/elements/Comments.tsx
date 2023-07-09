import React, { useContext } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Avatar } from '@mui/material';
import {useEffect } from 'react'
import moment from 'moment';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import AuthContext from '../../../../../Context/GlobalContext';
import { BASEURL } from '../../../../../Components/BaseLink';

type Props = {
    comment: any,
    HandleClickRepondre:()=>void
}

const Comments = (props: Props) => {
  const {userId} = useContext(AuthContext)
  const queryKey = ['commentReaction',props.comment._id]
  const queryClient = useQueryClient()
  const CheckReaction = async ( )=>{
         const allreaction = await axios.get(`${BASEURL}/comment/checkreaction/${props.comment._id}`)
         return allreaction.data.message
  }
  const {isLoading,data} = useQuery(queryKey,CheckReaction)
  const HandleClickReaction = async()=>{
    const reaction = await axios.put(`${BASEURL}/comment/reaction/${props.comment._id}`)
    if(reaction.status === 200){
        queryClient.invalidateQueries(['commentReaction',props.comment._id])
        console.log("reaction successfully received")
    }else{
      console.log("error when sending reaction")
    }
  }
  useEffect(()=>{
    !isLoading && console.log(data)
  },[isLoading])
  return (
      <div data-idcomment='idcomment' className="flex justify-between items-center  pr-3">
        <div className="text-[#f2f2f2] p-3 flex items-center space-x-2">
          <Avatar/>
              <div className="flex flex-col space-y-1">
                 <div className="">
                    <span className='font-semibold hover:underline'>{props.comment?.author.firstname}</span> {props.comment?.description}
                 </div>
                 <div className='text-[#777] flex items-center space-x-3 text-sm'>
                    <span className='cursor-pointer' >{moment(props.comment.date).fromNow()}</span>
                    {
                      data?.includes(userId) ? (
                        <span  className='font-semibold cursor-pointer hover:underline text-[#ec6b60]'>{
                          data?.length
                        } loves </span>
                      ):(
                        <span  className='font-semibold cursor-pointer hover:underline'>{
                          data?.length
                        } loves </span>
                      )
                    }
                    <span className='cursor-pointer hover:underline' onClick={props.HandleClickRepondre}>repondre</span>
                 </div>
            </div>
        </div>
        {
          isLoading ? (<></>):(
            data?.includes(userId) ? (
              <FavoriteOutlinedIcon onClick={HandleClickReaction} className='text-[#ec6b60] cursor-pointer '/>
            ):
            <FavoriteBorderOutlinedIcon onClick={HandleClickReaction} className='text-[#efefef] cursor-pointer '/>
          )
        }
    </div>
  )
}

export default Comments