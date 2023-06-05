import React from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar } from '@mui/material';
import {useEffect} from 'react'

type Props = {
    comment: any
}

const Comments = (props: Props) => {
  useEffect(()=>{
    console.log(props.comment)
  },[])
  return (
      <div data-idcomment='idcomment' className="flex justify-between items-center w-[100vw] pr-3">
        <div className="text-[#f2f2f2] p-3 flex items-center space-x-2">
          <Avatar/>
              <div className="flex flex-col space-y-1">
                 <div className="">
                    <span className='font-semibold hover:underline'>{props.comment?.author.firstname}</span> {props.comment?.description}
                 </div>
                 <div className='text-[#777] flex items-center space-x-3 text-sm'>
                    <span className='cursor-pointer' >18 h</span>
                    <span className='font-semibold cursor-pointer hover:underline'> 25 j'aime</span>
                    <span className='cursor-pointer hover:underline'>repondre</span>
                 </div>
            </div>
        </div>
        <FavoriteOutlinedIcon className='text-[#ec6b60] cursor-pointer '/>
    </div>
  )
}

export default Comments