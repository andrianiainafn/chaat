import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import { Community, Friends, Home, Saved } from '../Featurs/Users'

const UsersLayout = () => {
  return (
    <div className="flex w-full ">
        <div className="md:flex hidden flex-col w-[17%]">
            <SideBar/>
        </div>
        <div className=" flex flex-col w-full md:w-[82%]  ">
            <NavBar/>
            <div className="mt-[3vh]">
                <Routes>
                    <Route path='' index={true} element={<Home/>}/>
                    <Route path='community' element={<Community/>}>
                        <Route path='' index={true} element={<p>List de pub des community dont je suis membre</p>}/>
                        <Route path='suggestion' element={<p>Suggestion de community</p>}/> 
                    </Route>
                    <Route path='friend' element={<Friends/>}>
                        <Route path='' index={true} element={<p>List de mes amis</p>}/>
                        <Route path='suggestion' element={<p>List de syggestion d' amis</p>}/>
                        <Route path='request' element={<p>List des demandes d' amis</p>}/>
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