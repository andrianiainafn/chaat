import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { IconButton } from '@mui/material';
import Google from '../../../../../assets/Images/google.svg' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link, useNavigate } from 'react-router-dom';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {yearInput,months,dateInput} from '../../Elements/data'
import axios from 'axios';
import AuthContext from '../../../../../Context/GlobalContext';


function Signup() {
  const {getConnection} = useContext(AuthContext)
  const [visibility,setVisibility] = useState<Boolean>(false)
  const [visibilityConfirm,setVisibilityConfirm] = useState<Boolean>(false)
  const [error,setError] = useState({fname:false,lname:false,year: false,month:false,day:false,gender:false,email:false,password:false,confirmpassword:false})
  const [information,setInformation] = useState({fname:'',lname:'',year: '',month:'',day:'',gender:'',email:'',password:'',confirmpassword:''})
  const navigate = useNavigate()
  const HandleClickVisibility = ()=>{
    setVisibility(ancien=>!ancien)
  }

  const HandleClickVisibilityConfrim = ()=>{
    setVisibilityConfirm(ancien=>!ancien)
  }
  const HandleChange = (e:ChangeEvent <HTMLInputElement>  )=>{
      const name = e.target.name
      const value = e.target.value  
      setInformation(info=> ({...info,[name]:value}))
  }
  const HandleChangeSelect = (e:ChangeEvent<HTMLSelectElement>)=>{
    const name = e.target.name
    const value = e.target.value
    setInformation(info=> ({...info,[name]:value}))
  }
  const HandleClickCreate = async()=>{
    if(!information.lname){
      setError(err=>({...err,lname:true}))
    }
    if(!information.fname){
      setError(err=>({...err,fname:true}))
    }
    if(!information.password){
      setError(err=>({...err,password:true}))
    }
    if(!information.confirmpassword){
      setError(err=>({...err,confirmpassword:true}))
    }
    if(!information.year){
      setError(err=>({...err,year:true}))
    }
    if(!information.month){
      setError(err=>({...err,month:true}))
    }
    if(!information.day){
      setError(err=>({...err,day:true}))
    }
    if(!information.gender){
      setError(err=>({...err,gender:true}))
    }
    if(!information.email){
      setError(err=>({...err,email:true}))
    }
    if(information.lname && information.email  && information.gender  && information.day 
      && information.month && information.year && information.confirmpassword 
      && information.password && information.fname){
      const userinformation = {
        lname: information.lname,
        fname: information.fname,
        gender: information.gender,
        password: information.password,
        birth: information.year + '-' + information.month + '-' + information.day,
        email: information.email
       }
       console.log(userinformation)
       const register = await axios.post('http://localhost:8000/auth/register',userinformation)
       if(register.status === 200){
        getConnection()
         navigate('/auth/confirmation')
       }
    }
  }
  return (
    <div className=" flex h-screen flex-col space-y-8 justify-center ">
          <h3 className='text-[#efefef] text-2xl  text-center'>Sign up</h3>
        <div className=" w-[80%] md:w-[75%] mx-auto flex flex-col space-y-4">
            <div className="flex items-center justify-between flex-wrap ">
              <div className="w-[45%] flex flex-col space-y-1">
                {
                  error.fname && (
                    <div className="flex justify-between items-center text-red-500 text-sm">
                      <span className=' '>This is required !!</span>
                      <InfoOutlinedIcon sx={{height:'3vh'}}/>
                    </div>
                  )                  
                }
                <div className={
                  error.fname ? "flex items-center w-full border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-red-500"
                  : "flex items-center w-full border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]"
                }>
                  <PersonOutlinedIcon className='w-[5%] text-[#efefef]'/>
                  <input onChange={HandleChange} className='w-[95%] placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='text' name='fname' placeholder='Your first name...'/>
                </div>
              </div>
              <div className="w-[45%] flex flex-col space-y-1">
                {
                  error.lname && (
                    <div className="flex justify-between items-center text-red-500 text-sm">
                      <span className=' '>This is required !!</span>
                      <InfoOutlinedIcon sx={{height:'3vh'}}/>
                    </div>
                  )
                }
                <div className={
                  error.lname ? "flex items-center w-full  border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-red-500"
                  : "flex items-center w-full  border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]"
                }>
                  <PersonOutlinedIcon className='w-[5%] text-[#efefef]'/>
                  <input onChange={HandleChange} className='w-[95%] placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='text' name='lname' placeholder='Your last name...'/>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
                {
                  error.email && (
                    <div className="flex justify-between items-center text-red-500 text-sm">
                      <span className=' '>This is required !!</span>
                      <InfoOutlinedIcon sx={{height:'3vh'}}/>
                    </div>
                  )                  
                }
              <div className={
                error.email ? "flex items-center border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-red-500"
                : "flex items-center border-[1px]  bg-[#17202a]   rounded-full py-2 px-2 border-[#444]"
              }>
                <MailOutlineIcon className='text-[#efefef]'/>
                <input onChange={HandleChange} className='placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='emai' name='email' placeholder='Your email address...'/>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-60% flex flex-col space-y-1">
                <span className='text-[#efefef] text-sm'>Birth</span>
                <div className=" flex items-center space-x-2">
                  <div className="  flex flex-col space-y-1">
                    {
                      error.year && (
                        <div className="flex justify-between items-center text-red-500 text-sm">
                          <span className=' '>This is required !!</span>
                          <InfoOutlinedIcon sx={{height:'3vh'}}/>
                        </div>
                      )                  
                    }
                    <select onChange={HandleChangeSelect} name='year' 
                     className={
                      error.year ? 'outline-none bg-[#17202a] text-[#efefef] border-[1px] rounded-lg px-2 border-red-500'
                      : 'outline-none bg-[#17202a] text-[#efefef] border-[1px] rounded-lg px-2 border-[#444]'
                     }>
                        <option value=''>year</option>
                        {
                          yearInput.map(year=>(
                            <option key={year } value={year}>{year}</option>
                          ))
                         }
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1">
                    {
                      error.month && (
                        <div className="flex justify-between items-center text-red-500 text-sm">
                          <span className=' '>This is required !!</span>
                          <InfoOutlinedIcon sx={{height:'3vh'}}/>
                        </div>
                      )                  
                    }
                    <select onChange={HandleChangeSelect} name='month' 
                    className={
                      error.month ? 'outline-none bg-[#17202a]  text-[#efefef] border-[1px] rounded-lg px-2 border-red-500'
                      :'outline-none bg-[#17202a]  text-[#efefef] border-[1px] rounded-lg px-2 border-[#444]'
                    }>
                      <option value='' >month</option>
                      {
                        months.map((month,key)=>(
                          <option key={month} value={key + 1}>{month}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1">
                    {
                      error.day && (
                        <div className="flex justify-between items-center text-red-500 text-sm">
                          <span className=' '>This is required !!</span>
                          <InfoOutlinedIcon sx={{height:'3vh'}}/>
                        </div>
                      )                  
                    }
                    <select onChange={HandleChangeSelect} name='day' 
                    className={
                      error.day  ? 'outline-none  bg-[#17202a] text-[#efefef] border-[1px] rounded-lg px-2 border-red-500'
                      :'outline-none  bg-[#17202a] text-[#efefef] border-[1px] rounded-lg px-2 border-[#444]'
                    }>
                      <option  value='' >day</option>
                      {
                        dateInput.map((day)=>(
                          <option key={day} value={day}>{day}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <div className="flex flex-col space-y-1">
                  {
                    error.gender && (
                      <div className="flex justify-between items-center text-red-500 text-sm">
                        <span className=' '>This is required !!</span>
                        <InfoOutlinedIcon sx={{height:'3vh'}}/>
                      </div>
                    )                  
                  }
                  <label htmlFor='day_naissance' className='text-[#efefef] text-sm'>Gender</label>
                  <select onChange={HandleChangeSelect} name='gender' 
                  className={
                    error.gender ? 'outline-none bg-[#17202a] text-[#efefef] border-[1px] rounded-lg px-2 border-red-500'
                    :'outline-none bg-[#17202a] text-[#efefef] border-[1px] rounded-lg px-2 border-[#444]'
                  }>
                        <option value='Femme'>Femme</option>
                        <option value='Homme'>Homme</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
                {
                  error.password && (
                    <div className="flex justify-between items-center text-red-500 text-sm">
                      <span className=' '>This is required !!</span>
                      <InfoOutlinedIcon sx={{height:'3vh'}}/>
                    </div>
                  )                  
                }
              <div className={
                error.password ? "flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-red-500"
                : "flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-[#444]"
              }>
                <LockOpenIcon className='w-[10%] text-[#efefef]'/>
                <input onChange={HandleChange} name='password' className='w-[80%] placeholder:text-sm ml-2 border-none
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
            <div className="flex flex-col space-y-1">
                {
                  error.confirmpassword && (
                    <div className="flex justify-between items-center text-red-500 text-sm">
                      <span className=' '>This is required !!</span>
                      <InfoOutlinedIcon sx={{height:'3vh'}}/>
                    </div>
                  )                  
                }
              <div className={
                error.confirmpassword ? "flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-red-500"
                :"flex justify-between items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] px-2 border-[#444]"
              }>
                <LockOpenIcon className='w-[10%] text-[#efefef]'/>
                <input onChange={HandleChange} name='confirmpassword' className='w-[80%] placeholder:text-sm ml-2 border-none
                 outline-none bg-transparent text-[#efefef]' type={visibilityConfirm ? 'text' : 'password'} placeholder='Confirme your password...'/>
                { 
                visibilityConfirm ? 
                  <IconButton onClick={HandleClickVisibilityConfrim}>
                    <Visibility  className='text-[#efefef] w-[10%] '/>
                  </IconButton> 
                  : 
                  <IconButton onClick={HandleClickVisibilityConfrim}>
                    <VisibilityOff  className='text-[#efefef] w-[10%]'/>
                  </IconButton> 
                }
              </div>
            </div>
          <div onClick={HandleClickCreate} className=" cursor-pointer flex items-center justify-center bg-[#4480ce]  rounded-full h-[6vh] ">
             <h3 className='text-[#efefef]'>Create account</h3>
          </div>
        </div>
         <div className="w-[80%] md:w-[75%] mx-auto flex flex-col space-y-3">
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