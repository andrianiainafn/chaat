import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {}

const EditProfile = (props: Props) => {
  const queryKey = ['getuserinformation']
  const [information,setInformation] = useState({
    fname:'',
    lname:'',
    birth:'',
    bio:''
  })
  const [isModify,setIsModify] = useState({
    fname:true,
    lname:true,
    birth:true,
    bio:true
  })
  const getuserinformation = async()=>{
      const userInformation = await axios.get('http://localhost:8000/user/getUserInfo')
      return userInformation.data.message 
  }
  const {isLoading,data} = useQuery(queryKey,getuserinformation)
  const HandleChange = (e:ChangeEvent <HTMLInputElement>)=>{
    const name = e.target.name
    const value = e.target.value  
    setInformation(info=> ({...info,[name]:value}))
  }
  useEffect(()=>{
    !isLoading && (
      setInformation({
        fname: data.firstname,
        lname: data.lastname,
        birth: data.birthday,
        bio: data.biographie
      })
    )
  },[isLoading])
  return (
    <div className='p-3 md:mx-[20vw]'>
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center ">
            <div className="">
              <label htmlFor="fname" className='opacity-90'>Firstname:</label>
              <input onChange={HandleChange} value={information.fname} disabled={isModify.fname} className='w-[95%] font-semibold  placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='text' name='fname' placeholder='Your new firstname...'/>
            </div>
            <button className='text-[#f2f2f2] opacity-60 hover:opacity-100 font-semibold hover:text-[#4480ce]'>Modify</button>
        </div>
        {/* <div className='bg-[#2c3a4a] h-[1px] w-[100%] flex justify-center items-center mx-auto ' /> */}
        <div className="flex justify-between items-center">
          <div className="">
            <label htmlFor="fname"  className='opacity-90'>Lasttname:</label>
            <input onChange={HandleChange} value={information.lname} disabled={isModify.lname} className='w-[95%] font-semibold  placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='text' name='fname' placeholder='Your new  lastname...'/>
          </div>
          <button className='text-[#f2f2f2] opacity-60 hover:opacity-100 font-semibold hover:text-[#4480ce]'>Modify</button>
        </div>
        {/* <div className='bg-[#2c3a4a] h-[1px] w-[100%] flex justify-center items-center mx-auto ' /> */}
        <div className="flex justify-between items-center">
          <div className="">
            <label htmlFor="bio"  className='opacity-90'>Bio:</label>
            <input onChange={HandleChange} value={information.bio} disabled={isModify.bio} className='w-[95%] font-semibold placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='text' name='fname' placeholder='Add Biography...'/>
          </div>
          <button className='text-[#f2f2f2] opacity-60 hover:opacity-100 font-semibold hover:text-[#4480ce]'>Modify</button>
        </div>
        {/* <div className='bg-[#2c3a4a] h-[1px] w-[100%] flex justify-center items-center mx-auto ' /> */}
        <div className="flex justify-between items-center">
          <div className="">
            <label htmlFor="birth"  className='opacity-90'>Birthday:</label>
            <input onChange={HandleChange} value={information.birth} disabled={isModify.birth} className='w-[95%]  placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef] font-semibold' type='text' name='fname' placeholder=''/>
          </div>
          <button className='text-[#f2f2f2] opacity-60 hover:opacity-100 font-semibold hover:text-[#4480ce]'>Modify</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile