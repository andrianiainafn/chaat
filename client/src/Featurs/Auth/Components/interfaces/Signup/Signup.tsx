import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { IconButton } from '@mui/material';
import Google from '../../../../../assets/Images/google.svg' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link, useNavigate } from 'react-router-dom';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Signup() {
  const [visibility,setVisibility] = useState(false)
  const navigate = useNavigate()
  const HandleClickVisibility = ()=>{
    setVisibility(ancien=>!ancien)
  }
  const HandleClickLogin = ()=>{
     navigate('/users/')
  }
  return (
    <div className=" flex h-screen flex-col space-y-4 justify-center ">
          <h3 className='text-[#efefef] text-2xl  text-center'>Sign up</h3>
        <div className=" w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <span className='text-[#efefef] ml-4'>First name</span>
              <div className="flex items-center border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]">
                <PersonOutlinedIcon className='text-[#efefef]'/>
                <input className='placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='emai' placeholder='Your first name...'/>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className='text-[#efefef] ml-4'>Last name</span>
              <div className="flex items-center border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]">
                <PersonOutlinedIcon className='text-[#efefef]'/>
                <input className='placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='emai' placeholder='Your last name...'/>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className='text-[#efefef] ml-4'>Email</span>
              <div className="flex items-center border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]">
                <MailOutlineIcon className='text-[#efefef]'/>
                <input className='placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='emai' placeholder='Your email address...'/>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className='text-[#efefef] ml-4'>Password</span>
              <div className="flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-[#444]">
                <LockOpenIcon className='w-[10%] text-[#efefef]'/>
                <input className='w-[80%] placeholder:text-sm ml-2 border-none
                 outline-none bg-transparent text-[#efefef]' type={visibility ? 'text' : 'password'} placeholder='Your password...'/>
                { 
                visibility ? 
                  <IconButton>
                    <Visibility onClick={HandleClickVisibility} className='text-[#efefef] w-[10%] '/>
                  </IconButton> 
                  : 
                  <IconButton>
                    <VisibilityOff onClick={HandleClickVisibility} className='text-[#efefef] w-[10%]'/>
                  </IconButton> 
                }
              </div>
            </div>
          <div onClick={HandleClickLogin} className=" cursor-pointer flex items-center justify-center bg-[#4480ce]  rounded-full h-[6vh] ">
             <h3 className='text-[#efefef]'>Create account</h3>
          </div>
        </div>
         <div className="w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
          <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
         </div>
        <div className="w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
          <div className=" cursor-pointer space-x-2 flex items-center justify-center  bg-[#17202a]  rounded-full h-[6vh] ">
              <FacebookOutlinedIcon className='h-6 w-6 text-[#1877f2]   '/>
             <h3 className='text-[#efefef]'>Continue with Facebook</h3>
          </div>
          <div className=" cursor-pointer space-x-2 flex items-center justify-center  bg-[#17202a]  rounded-full h-[6vh] ">
             <img src={Google} alt='Facebook icon' className='h-6 w-6'/>
             <h3 className='text-[#efefef]'>Continue with Google</h3>
          </div>
          <div className="flex justify-between items-center mx-4  ">
            <div className="  ">
                <h6 className='text-[#efefef]'>Already have accoount?</h6>
            </div>
            <div className="  ">
                <Link to='/auth/login'>
                  <h6 className='text-[#4480ce]  text-end cursor-pointer'>Click here</h6>
                </Link>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Signup
