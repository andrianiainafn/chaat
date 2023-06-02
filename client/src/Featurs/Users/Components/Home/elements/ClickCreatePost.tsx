import { Avatar } from '@mui/material'
import React,{useContext} from 'react'
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AuthContext from '../../../../../Context/GlobalContext';

interface Props {
    HandleClick: () => void
}
const ClickCreatePost:React.FC<Props> =({HandleClick}) => {
    const {profilepicture} = useContext(AuthContext)
    return (
    <>
        <div onClick={HandleClick} className="flex w-[90%] m-2 items-center">
          <Avatar src={`http://localhost:8000/${profilepicture}`} sx={{height:'2em', width: '2em', marginRight:'1rem'}} />
          <div className="flex justify-between items-center border-[1px] bg-[#2c3a4a] w-[85%] md:w-[85%] rounded-full p-1  border-[#444]">
            <input className='outline-none text-[#efefef] ml-2 w-full border-none bg-transparent' placeholder="What's in your mind ?" type='text' />
          </div>
        </div>
        <div className="flex justify-between items-center m-3">
           <div className="md:w-[25%] w-[35%] cursor-pointer flex justify-between items-center">
              <PhotoCameraOutlinedIcon sx={{color: '#efefef'}}/>
              <ImageOutlinedIcon sx={{color: '#efefef'}}/>
              <AttachFileOutlinedIcon sx={{color: '#efefef'}}/>
              <AddReactionOutlinedIcon sx={{color: '#efefef'}}/>
           </div>
           <div className="flex justify-between items-center w-[45%] md:w-[35%]">
               <div className="cursor-pointer text-[#efefef] flex justify-between items-center">
                  <CreateOutlinedIcon sx={{height: '2.5vh'}}/>
                  <span className='text-sm'>Drafts</span>
               </div>
               <div className=" cursor-pointer flex justify-center items-center border border-[#444] w-[12vw] px- md:w-[6vw] h-[5vh] text-[#efefef] rounded-lg">
                 <span className='text-sm'>Posts</span>
               </div>
           </div>
        </div>
    </>
  )
}

export default ClickCreatePost