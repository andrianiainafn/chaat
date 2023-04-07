import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
  return (
    <div>
        <div className="flex ">
            <div className="md:w-[40%] w-full">
                <Outlet/>
            </div>
            <div className="hidden md:flex w-[60%] bg-[#17202a] h-screen">
               <h1>Image Slide</h1>
            </div>
        </div>
    </div>
  )
}

export default AuthPage