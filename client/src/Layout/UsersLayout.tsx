import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import { AllOFFriends, Community, Discution, EditProfile, Friends, Home, List, Media, Notification, PersonalPost, Principale, Profile, Recherche, Request, Saved, Suggestion } from '../Featurs/Users'
import { PostContext } from '../Featurs/Users/Components/Home/Context/PostContext'

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
                    <Route path='' index={true} element={<PostContext><Home/></PostContext> }/>
                    <Route path='profile/' element={<Profile/>} >
                        <Route path='home/:id' index={true} element={<PostContext><PersonalPost/></PostContext>} />
                        <Route path='edit/:id' element={<EditProfile/>} />
                        <Route path='media/:id' element={<Media/>}/>
                    </Route>
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
                    <Route path='messages/' element={<Principale/>} >
                        <Route path=':id' index={true} element={<Discution/>}/>
                    </Route>
                    <Route path='saves' element={<Saved/>}/>
                    <Route path='notifications' element={<Notification/>}/>
                    <Route path='search' element={<Recherche/>}/>
                </Routes>    
            </div>
        </div>
    </div>    
    
  )
}
//font noire:#17181c
//

export default UsersLayout