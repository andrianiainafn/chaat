import { Avatar } from '@mui/material'
import React, { useState,ChangeEvent } from 'react'
import Logo from '../../../../../assets/Images/logo.png'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { BASEURL } from '../../../../../Components/BaseLink';

function Confirmation() {
  const [code,setCode] = useState<Number>()
  const [error,setError] = useState<Boolean>(false)
  const navigate = useNavigate()
  const HandleChange = async(e:ChangeEvent<HTMLInputElement>)=>{
  if(e.target.value.length === 6){
    const code = parseInt(e.target.value);
    const confirmation = await axios.post(`${BASEURL}/auth/confirmation`,{code})
    if(confirmation.status === 200){
      navigate('/users/')
    }else{
      setError(true)
    }
  }
  }
  return (
    <div className='flex h-[90vh] flex-col space-y-12 justify-center'>
       <div className="flex flex-col space-y-3 items-center">
            <div className="flex flex-col items-center w-full">
                  <Avatar src={Logo} sx={{height:'9vh',width:'6vw'}} />
                  <h3 className='text-[#4480ce] text-3xl '>Chaat</h3>
            </div>
            <div className="">
              <h3 className='text-[#efefef] text-2xl  text-center'>Confirmation </h3>
       </div>
            </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="w-[80%] flex flex-col space-y-2">
              {
                error && (
                  <div className="flex justify-between items-center text-red-500 text-sm">
                    <span className=' '>This is required !!</span>
                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                  </div>
                )
              }
            <div className={error ? "flex m-auto items-center border-[1px] w-full   bg-[#17202a]  rounded-full py-2 px-2 border-red-500"
            :"flex m-auto items-center border-[1px] w-full   bg-[#17202a]  rounded-full py-2 px-2 border-[#444]"}>
              <LockOpenIcon className='w-[10%] text-[#efefef]'/>
              <input onFocus={()=>setError(false)} onChange={HandleChange}  className='w-[90%] placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]'
               name='code' type='text' placeholder='Enter the code from  your emmail...'/>
            </div>
          </div>
          <div className="w-[80%] flex justify-between items-center mx-auto flex-wrap  ">
              <div className="  ">
                  <h6 className='text-[#efefef]'>Your code expire after 60s</h6>
              </div>
              <div className=" ">
                <h6 className='text-[#4480ce] hover:underline  text-end cursor-pointer'>Click here to resend</h6>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Confirmation