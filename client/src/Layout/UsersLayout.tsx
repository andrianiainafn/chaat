import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Community, Friends, Home, Saved } from '../Featurs/Users'

const UsersLayout = () => {
  return (
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
  )
}

export default UsersLayout