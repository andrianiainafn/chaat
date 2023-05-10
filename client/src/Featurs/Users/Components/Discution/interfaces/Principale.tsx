import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Element/Sidebar'

type Props = {}
  
const Principale = (props: Props) => {
  return (  
    <div className='mt-[8vh]  p-4 relative '>
        <Sidebar/>
        <div className=" mx-2 md:mx-0 fixed overflow-y-scroll scrollbar-hide h-[85vh] md:right-16 rounded-lg w-[65vw] md:w-[40vw] bg-[#17202a] border-[1px] border-[#2c3a4a]">
          <Outlet/>
        </div>
    </div>
  )
}
export default Principale