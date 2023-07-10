import React, { useContext, useEffect } from "react";
import { Route, Routes, redirect, useLocation, useNavigate } from "react-router-dom";
import Acceuille from "../Featurs/Index/Acceuille";
import AdminLayout from "../Layout/AdminLayout";
import AuthLayout from "../Layout/AuthLayout";
import UsersLayout from "../Layout/UsersLayout";
import AuthContext from "../Context/GlobalContext";


function AppRouter(){
  const {connected} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
      if(!connected && location.pathname !== "/auth/login"){
        navigate('/')
      }
    }, [connected])
  return (
    <Routes>
      <>
        <Route path="/" element={<Acceuille/>} />
        <Route path="auth/*" element={<AuthLayout/>}/></>
        <Route path="admin/*" element={<AdminLayout/>}/>
        {
          connected && <Route path="users/*" element={<UsersLayout/>}/>
        }
    </Routes>
  )
}
export default AppRouter;