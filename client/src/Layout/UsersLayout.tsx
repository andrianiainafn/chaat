import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import { AllOFFriends, Community, Friends, Home, List, Request, Saved, Suggestion } from '../Featurs/Users'

const UsersLayout = () => {
  return (
    <div className="flex w-full ">
        <div className="md:flex hidden flex-col w-[17%]">
            <SideBar/>
        </div>
        <div className=" flex flex-col w-full md:w-[75%]  ">
            <NavBar/>
            <div className="mt-[3vh]">
                <Routes>
                    <Route path='' index={true} element={<Home/>}/>
                    <Route path='community' element={<Community/>}>
                        <Route path='' index={true} element={<p>List de pub des community dont je suis membre</p>}/>
                        <Route path='suggestion' element={<p>Suggestion de community</p>}/> 
                    </Route>
                    <Route path='friends/' element={<Friends/>}>
                        <Route path = '' index={true} element={<AllOFFriends/>}/>
                        <Route path='list'  element={<List/>}/>
                        <Route path='suggestion' element={<Suggestion/>}/>
                        <Route path='request' element={<Request/>}/>
                    </Route>
                    <Route path='saves' element={<Saved/>}/>
                </Routes>    
            </div>
        </div>
    </div>    
    
  )
}
//font noire:#17181c
//

export default UsersLayout