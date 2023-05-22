import React from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar } from '@mui/material';

type Props = {
    comment: number
}

const Comments = (props: Props) => {
  return (
      <div key={props.comment} data-idcomment='idcomment' className="flex justify-between items-center w-full pr-3">
        <div className="text-[#f2f2f2] p-3 flex items-center space-x-2">
          <Avatar/>
              <div className="flex flex-col space-y-1">
                 <div className="">
                    <span className='font-semibold hover:underline'>Loyd Forger</span> je commente 
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