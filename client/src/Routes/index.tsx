import React from "react";
import { Route, Routes } from "react-router-dom";
import Acceuille from "../Featurs/Index/Acceuille";
import AdminLayout from "../Layout/AdminLayout";
import AuthLayout from "../Layout/AuthLayout";
import UsersLayout from "../Layout/UsersLayout";


function AppRouter(){
  return (
    <Routes>
        <Route path="/" element={<Acceuille/>} />
        <Route path="auth/*" element={<AuthLayout/>}/>
        <Route path="admin/*" element={<AdminLayout/>}/>
        <Route path="users/*" element={<UsersLayout/>}/>
    </Routes>
  )
}
export default AppRouter;