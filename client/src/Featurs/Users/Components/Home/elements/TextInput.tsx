import React, { ChangeEvent, useState } from 'react'
import PropTypes from 'prop-types'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmojiPicker from 'emoji-picker-react';

type  Props = {
    HandleTextChange: (e:ChangeEvent<HTMLTextAreaElement>)=>void,
    HandleImageChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    // HandleAddReaction: (e:ChangeEvent<HTMLInputElement>)=>void
}
function TextInput({HandleTextChange,HandleImageChange}:Props) {
    const [emojy,setEmojy] = useState<boolean>()
  return (
    <>
        <div className="text-[#17202a] font-semibold text-center flex justify-center items-center text-xl">
            <h3>What's in your mind now ?</h3>
        </div>
        <div className="mt-3">
            <textarea onChange={HandleTextChange} className='focus:outline-none bg-[#ffffff04] text-gray-900 h-2 w-full min-h-[30vh] max-h-[32vh] rounded-t-lg p-2'
             name="question" id=""  placeholder='Write somethings...'/>
        </div>
        <div onClick={()=>setEmojy(ancien=>!ancien)} className="cursor-pointer w-[15%]  h-[8vh] mb-5">
            <div className="flex  flex-col cursor-pointer text-gray-900 items-center h-full">
                <h5 className='cursor-pointer text-indigo-900 animate-bounce'><AddReactionOutlinedIcon/></h5>
                <h5 className='cursor-pointer '>Emojy</h5>
            </div>
        </div>
        {
            emojy && (
                <div className="cursor-pointer flex justify-center absolute top-14 left-80 z-40  h-full">
                    <EmojiPicker/>
                </div>
            )
        }
        <div className="bg-[#ffffff16] px-4 w-full h-[8vh] rounded-b-lg flex justify-between items-center">
            <div className=" text-[#4480ce]  w-[10%] relative h-full cursor-pointer">
                <div className="cursor-pointer w-[4vw] absolute  h-full">
                    <div className="flex  flex-col cursor-pointer text-gray-900 items-center h-full">
                        <h5 className='cursor-pointer text-orange-600'><PhotoCameraOutlinedIcon/></h5>
                        <h5 className='cursor-pointer '>Photos</h5>
                    </div>
                </div>
                <div className="absolute w-[4vw]  h-full cursor-pointer ">
                    <input onChange={HandleImageChange} type='file' multiple  className='cursor-pointer h-full w-[8vw] input  opacity-0' name='images' />
                </div>
            </div>
            <div className="cursor-pointer w-[15%]  h-full">
                <div className="flex  flex-col cursor-pointer text-gray-900 items-center h-full">
                    <h5 className='cursor-pointer text-blue-800'><AttachFileOutlinedIcon/></h5>
                    <h5 className='cursor-pointer '>Files</h5>
                </div>
            </div>
            <div className="cursor-pointer w-[15%]  h-full">
                <div className="flex  flex-col cursor-pointer text-gray-900 items-center h-full">
                    <h5 className='cursor-pointer text-yellow-500'><AddReactionOutlinedIcon/></h5>
                    <h5 className='cursor-pointer '>Humeur</h5>
                </div>
            </div>
            <div className="cursor-pointer w-[15%]  h-full">
                <div className="flex  flex-col cursor-pointer text-gray-900 items-center h-full">
                    <h5 className='cursor-pointer'><FmdGoodOutlinedIcon/></h5>
                    <h5 className='cursor-pointer '>Location</h5>
                </div>
            </div>
        </div>
    </>
  )
}

TextInput.propTypes = {

}

export default TextInput

