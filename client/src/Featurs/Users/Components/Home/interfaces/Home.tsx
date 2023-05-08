import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from '../../../../../assets/Images/logo.png'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GroupsIcon from '@mui/icons-material/Groups';
import ClickCreatePost from '../elements/ClickCreatePost';
import CreatePost from './CreatePost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Home = () => {
  const [isCreate,setIsCreate] =  useState<boolean>(false)
  const HandleClickIsCreate:()=>void = ()=>{
    setIsCreate(ancien=>!ancien)
  }
  const queryKey = ['posts']
  const getPost = async()=>{
    const pub = await axios.get('http://localhost:8000/actuality')
    return pub
  }
  const {isLoading,data } = useQuery(queryKey, getPost)
  const list = [1,2,3,4,5]
  useEffect(()=>{
    console.log(data)
  },[isLoading])
  return (
    <div className=' flex mx-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
      {
        isCreate && (
          <CreatePost open={isCreate} HandleClick={HandleClickIsCreate}/>
        )
      }
      <div className="w-[100%] md:w-[50%]">
         <div className="bg-[#17202a] border-[1px] border-[#2c3a4a] rounded-lg">
            <ClickCreatePost HandleClick={HandleClickIsCreate} />
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
                <p className='text-[#efefef] text-xs hidden md:flex'>187 comments</p>
              </div>
              <div className=" cursor-pointer flex items-center justify-between ">
                <ShareOutlinedIcon sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
                <p className='text-[#efefef] text-xs hidden md:flex'>7 shares</p>
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