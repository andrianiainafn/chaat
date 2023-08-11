import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import image1 from '../assets/Images/image1.png'
import image2 from '../assets/Images/yor.jpg'

const AuthPage = () => {
  const [current,setCurrentSlide] = useState(0)
  const slides = [
    image1,
    image2
  ]
  const intervale = 3000
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentSlide((current + 1) % slides.length)
    },intervale)
    return () => clearInterval(intervalId)
  },[current,intervale])
  return (
    <div>
        <div className="flex ">
            <div className="md:w-[40%] w-full">
                <Outlet/>
            </div>
            <div className="hidden md:flex w-[60%] bg-[#17202a] h-screen px-28 py-20">
                <img src={slides[current]} className='w-[80%] h-[80vh]' alt='an pictures of the interface of chaat when you are in' />
            </div>
        </div>
    </div>
  )
}

export default AuthPage 