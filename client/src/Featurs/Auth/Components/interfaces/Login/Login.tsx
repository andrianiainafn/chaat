import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { IconButton } from '@mui/material';
import Google from '../../../../../assets/Images/google.svg' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [visibility,setVisibility] = useState(false)
  const navigate = useNavigate()
  const HandleClickVisibility = ()=>{
    setVisibility(ancien=>!ancien)
  }
  const HandleClickLogin = ()=>{
     navigate('/users/')
  }
  return (
    <div className=" flex h-[90vh] flex-col space-y-6 justify-center ">
          <h3 className='text-[#efefef] text-2xl  text-center'>Log In</h3>
        <div className=" w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <span className='text-[#efefef] ml-4'>Email</span>
              <div className="flex items-center border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]">
                <PersonOutlinedIcon className='text-[#efefef]'/>
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
          <div className="flex justify-between items-center w-full flex-wrap mx-2">
            <div className="md:w-[40%] flex space-x-1 items-center">
              <input type="checkbox"  className='h-5 border border-none outline-none ' name="remember" id="remember" />
              <label htmlFor="remember" className='text-[#f2f2f2] ml-2'>Remember me</label>
            </div>
            <div className="md:w-[50%] text-end mr-4">
                <h6 className='text-[#4480ce] cursor-pointer'> Forgot password ?</h6>
            </div>
          </div>
          <div onClick={HandleClickLogin} className=" cursor-pointer flex items-center justify-center bg-[#4480ce]  rounded-full h-[6vh] ">
             <h3 className='text-[#efefef]'>Log In</h3>
          </div>
        </div>
         <div className="w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
          <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
         </div>
        <div className="w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
          <div className=" cursor-pointer space-x-2 flex items-center justify-center  bg-[#17202a]  rounded-full h-[6vh] ">
              <FacebookOutlinedIcon className='h-6 w-6 text-[#1877f2]   '/>
             <h3 className='text-[#efefef]'>Continue withe Facebook</h3>
          </div>
          <div className=" cursor-pointer space-x-2 flex items-center justify-center  bg-[#17202a]  rounded-full h-[6vh] ">
             <img src={Google} alt='Facebook icon' className='h-6 w-6'/>
             <h3 className='text-[#efefef]'>Continue withe Google</h3>
          </div>
          <div className="flex justify-between items-center mx-4  ">
            <div className="  ">
                <h6 className='text-[#efefef]'> Don't have account?</h6>
            </div>
            <div className="  ">
                <h6 className='text-[#4480ce] text-end cursor-pointer'>Click here</h6>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Login
