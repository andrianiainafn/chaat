import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
  return (
    <div>
        <div className="">
            <div className="">
                <Outlet/>
            </div>
            <div className="">
               <h1>Image Slide</h1>
            </div>
        </div>
    </div>
  )
}

export default AuthPage