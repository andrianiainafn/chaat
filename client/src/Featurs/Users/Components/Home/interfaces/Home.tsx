import { Avatar } from '@mui/material'
import React from 'react'
import Logo from '../../../../../assets/Images/logo.png'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GroupsIcon from '@mui/icons-material/Groups';

const Home = () => {
  const list = [1,2,3,4,5]
  return (
    <div className='flex mx-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
      <div className="w-[100%] md:w-[50%]">
         <div className="bg-[#17202a] border-[1px] border-[#2c3a4a] rounded-lg">
            <div className="flex w-[90%] m-2 items-center">
              <Avatar sx={{height:'2em', width: '2em', marginRight:'1rem'}} />
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
               <div className="flex justify-between items-center w-[40%] md:w-[30%]">
                   <div className="cursor-pointer text-[#efefef] flex justify-between items-center">
                      <CreateOutlinedIcon sx={{height: '2.5vh'}}/>
                      <span className='text-sm'>Drafts</span>
                   </div>
                   <div className=" cursor-pointer flex justify-center items-center border border-[#444] w-[10vw] md:w-[6vw] h-[5vh] text-[#efefef] rounded-lg">
                     <span className='text-sm'>Posts</span>
                   </div>
               </div>
            </div>
         </div>
        {
          list.map(post=>(
          <div key={post} className="bg-[#17202a] flex flex-col space-y-2 border-[1px]  border-[#2c3a4a] rounded-lg mt-3">
            <div className="p-2 flex w-full justify-between items-center">
              <div className="flex items-center ">
                <Avatar sx={{height:'2em', width: '2em', marginRight:'1rem'}}/>
                <div className="">
                    <h6 className='text-xs text-[#efefef]'>FCB MADA</h6>
                    <h6 className='text-xs text-[#777]'>3000 members</h6>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                   <BookmarkBorderOutlinedIcon className='cursor-pointer' sx={{color:"#efefef"}}/>
                   <MoreVertOutlinedIcon className='cursor-pointer' sx={{color:"#efefef"}}/>
              </div>
            </div>
            <div className="text-[#efefef] m-2 text-sm ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eos dolorem, error tempore dicta porro nostrum sint expedita mollitia labore magni,
                nobis adipisci voluptatibus eligendi rerum iusto ad quidem aspernatur deleniti?
              </p>
            </div>
            <div className="w-full">
               <img src={Logo} className='w-full h-[34vh]' alt='example' />
            </div>
            <div className="w-full p-2 flex justify-between items-center">
              <div className="cursor-pointer flex items-center justify-between  ">
                <FavoriteOutlinedIcon  sx={{color:'#ec6b60',marginRight:'0.4rem'}}/>
                <p className='text-[#efefef] text-xs hidden md:flex'>You,and 192 others</p>
              </div>
              <div className="cursor-pointer flex items-center justify-between ">
                <ModeCommentOutlinedIcon  sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
                <p className='text-[#efefef] text-xs hidden md:flex'>You,and 192 others</p>
              </div>
              <div className=" cursor-pointer flex items-center justify-between ">
                <ShareOutlinedIcon sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
                <p className='text-[#efefef] text-xs hidden md:flex'>You,and 192 others</p>
              </div>
            </div>
         </div>
          ))
        }
      </div>
      {/* <div className="hidden md:w-[30%]  bg-[#17202a] md:flex flex-col space-y-2 border-[1px] p-2 border-[#2c3a4a] rounded-lg ">

      </div> */}
    </div>
  )
}

export default Home