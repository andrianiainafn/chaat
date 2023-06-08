import { Avatar } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import AuthContext from '../../../../Context/GlobalContext';

const Profile = () => {
  const [images,setImages] = useState<File[]>([])
  const {profilepicture,firstname,lastname} = useContext(AuthContext)
  const HandleImageChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files
    if(files){
        setImages(Array.from(files))
        console.log(images)
    }
}
  return (
    <div className='flex flex-col w-full  mt-[5vh] text-[#f2f2f2] md:mr-[4vw] md:ml-[4vw]'>
      <div className="">
          <div className="bg-[#17202a]  md:mr-[5vw] md:ml-[5vw] h-[25vh] md:h-[35vh] relative">
              <div className="absolute addphoto">
                <div className=" text-[#4480ce]  w-[10%] relative h-full cursor-pointer">
                  <div className="cursor-pointer w-[40vw] absolute  h-full">
                    <div className="flex  flex-col cursor-pointer  items-center h-full">
                      <h5 className='cursor-pointer text-orange-600'><PhotoCameraOutlinedIcon/></h5>
                      <h5 className='cursor-pointer '> Add cover Photo</h5>
                    </div>
                  </div>
                    <div className="absolute w-[40%]  h-[8vh] cursor-pointer ">
                      <input onChange={HandleImageChange} type='file'   className='cursor-pointer h-full w-[40vw] input  opacity-0' name='images' />
                    </div>
                </div>
              </div>
              <div className="absolute block md:hidden left-3  bottom-2 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Avatar  src={profilepicture} sx={{height:'10vh',width:'20vw'}}/>
                  <h3 className=' font-semibold text-lg'> {firstname} {lastname}</h3>
                </div>
              </div>
              <div className="hidden md:block absolute left-20  bottom-2 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Avatar  src={profilepicture} sx={{height:'12vh',width:'8vw'}}/>
                  <h3 className='font-semibold text-lg'>{firstname} {lastname}</h3>
                </div>
              </div>
          </div>
      </div>
      <div className='bg-[#2c3a4a] h-[1px] w-[60vw] flex justify-center items-center mx-auto ' />
      <div className="flex justify-between items-center p-3 md:px-[8vw] text-lg">
          <NavLink className='link text-center' to={`/users/profile/${firstname}`}>
             View  your all posts 
          </NavLink>
          <NavLink className='link text-center' to='/users/profile/edit' >
            Edit your profile
          </NavLink>
          <NavLink className='link text-center' to='/users/profile/media'>
            View your all media
         </NavLink>
      </div>
      <div className="">
        <Outlet/>
      </div>
    </div>
  )
}

export default Profile