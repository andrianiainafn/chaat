import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Element/Sidebar'

type Props = {}
  
const Principale = (props: Props) => {
  const queryKey = ['discu']
  const getMyFriends = async() =>{
    const friends = await axios.get('http://localhost:8000/friend/getAllFriends')
    return friends.data.message.friends
  }
  const {isLoading,data} = useQuery(queryKey,getMyFriends)
  useEffect(()=>{
    !isLoading && console.log(data)
  },[isLoading])
  return (  
    <div className='mt-[8vh] p-0 md:p-4 relative '>
        {
          isLoading ? (
            <></>
          ):(
            <Sidebar discuList={data}/>
          )
        }
        <div className="  fixed md:mx-0 overflow-y-scroll scrollbar-hide md:h-[85vh] h-[75vh] w-full md:w-[40vw] md:right-16 rounded-lg   bg-[#17202a] border-[1px] border-[#2c3a4a]">
          <Outlet/>
        </div>
    </div>
  )
}
export default Principale