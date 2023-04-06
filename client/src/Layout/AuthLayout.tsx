import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Confirmation, Login, Singup } from '../Featurs/Auth'
import AuthPage from '../Pages/AuthPage'

function AuthLayout() {
  return (
    <Routes >
      <Route path='' element={<AuthPage/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Route>
    </Routes>
  )
}

export default AuthLayout