import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Element/Sidebar'
import { BASEURL } from '../../../../../Components/BaseLink'
import { useCookies } from 'react-cookie'

type Props = {}
  
const Principale = (props: Props) => {
  const queryKey = ['discu']
  const [cookie] = useCookies()
  const getMyFriends = async() =>{
    const friends = await axios.get(`${BASEURL}/conversation/getconversation`,{
      headers:
      {
        'Authorization': `Bearer ${cookie.name}`,
        'Content-Type': 'application/json',
      }
    })
    if(friends.status === 200){
      console.log("tonga ry lerony")
    }else{
      console.log(friends)
    }
    return friends.data.message
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
            <Sidebar discuList={[]}/>
          )
        }
        <div className="  fixed md:mx-0 overflow-y-scroll scrollbar-hide md:h-[85vh] h-[75vh] w-full md:w-[40vw] md:right-16 rounded-lg   bg-[#17202a] border-[1px] border-[#2c3a4a]">
          <Outlet/>
        </div>
    </div>
  )
}
export default Principale