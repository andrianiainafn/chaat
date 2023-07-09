import React, { useContext, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton } from '@mui/material';
import Google from '../../../../../assets/Images/google.svg' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import AuthContext from '../../../../../Context/GlobalContext';
import {BASEURL} from '../../../../../Components/BaseLink'

function Login() {
  const {getConnection} = useContext(AuthContext)
  const [visibility,setVisibility] = useState(false)
  const [errorpassword,setErrorPassword] = useState(false)
  const [erroremail,setErrorEmail] = useState(false)
  const navigate = useNavigate()
  const [information,setInformation] = useState({
    email:'',
    password:''
  })
  const HandleClickVisibility = ()=>{
    setVisibility(ancien=>!ancien)
  }
  const HandleClickLogin = async()=>{
     if(!information.email){
       setErrorEmail(true)
      }
     if(!information.password){
      setErrorPassword(true)
    }
   if(information.password && information.email){
     const login = await axios.post(`https://chaat-df6x.onrender.com/auth/login`,information)
     if(login.status === 200){
        getConnection()
        navigate('/users/') 
     }
  }
  }
  const HandleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name
        const value = e.target.value
        setInformation(values => ({...values,[name]:value}))
  }

  return (
    <div className=" flex h-[90vh] flex-col space-y-8 justify-center ">
          <h3 className='text-[#efefef] text-2xl  text-center'>Log In</h3>
        <div className=" w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              {
                erroremail && (
                  <div className="flex justify-between items-center text-red-500 text-sm">
                    <span className=' '>This is required !!</span>
                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                  </div>
                )
              }
              <div className= {erroremail ? "flex items-center border-[1px]  bg-[#17202a] h-[6vh]  rounded-full py-2 px-2 border-red-500"
              :"flex items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] py-2 px-2 border-[#444]"}>
                <MailOutlineIcon className='w-[10%] text-[#efefef]'/>
                <input onFocus={()=>setErrorEmail(false)} onChange={HandleChange} className='w-[90%] placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' name='email' type='emai' placeholder='Your email address...'/>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              {
                errorpassword && (
                  <div className="flex justify-between items-center text-red-500 text-sm">
                    <span className=' '>This is required !!</span>
                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                  </div>
                )
              }
              <div className={errorpassword ? 'flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-red-500' 
              : "flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-[#444]"}>
                <LockOpenIcon className='w-[10%] text-[#efefef]'/>
                <input name='password' onFocus={()=>setErrorPassword(false)} onChange={HandleChange} className='w-[80%] placeholder:text-sm ml-2 border-none
                 outline-none bg-transparent text-[#efefef]' type={visibility ? 'text' : 'password'} placeholder='Your password...'/>
                { 
                visibility ? 
                  <IconButton onClick={HandleClickVisibility}>
                    <Visibility  className='text-[#efefef] w-[10%] '/>
                  </IconButton> 
                  : 
                  <IconButton onClick={HandleClickVisibility}>
                    <VisibilityOff  className='text-[#efefef] w-[10%]'/>
                  </IconButton> 
                }
              </div>
            </div>
          <div className="flex justify-between items-center w-full flex-wrap mx-2">
            <div className="md:w-[40%] flex space-x-1 items-center">
              <input  onChange={HandleChange} type="checkbox"  className='h-5 border border-none outline-none ' name="remember" id="remember" />
              <label htmlFor="remember" className='text-[#f2f2f2] ml-2'>Remember me</label>
            </div>
            <div className="md:w-[50%] text-end mr-4">
                <h6 className='text-[#4480ce] cursor-pointer'> Forgot password ?</h6>
            </div>
          </div>
          <button onClick={HandleClickLogin} disabled={erroremail || errorpassword ? true : false}
          className='text-[#efefef] border-none outline-none cursor-pointer flex items-center justify-center
           bg-[#4480ce]  rounded-full h-[6vh]'>
              Log In
          </button>
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
                <h6 className='text-[#efefef]'> Don't have account?</h6>
            </div>
            <div className="  ">
                <Link to='/auth/signup'>
                  <h6 className='text-[#4480ce]  text-end cursor-pointer'>Click here</h6>
                </Link>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Login