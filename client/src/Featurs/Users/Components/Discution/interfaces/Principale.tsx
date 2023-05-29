import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Element/Sidebar'

type Props = {}
  
const Principale = (props: Props) => {
  return (  
    <div className='mt-[8vh]  p-4 relative '>
        <Sidebar/>
        <div className="  fixed md:mx-0 overflow-y-scroll scrollbar-hide md:h-[85vh] h-[75vh] w-[95%] md:w-[40vw] md:right-16 rounded-lg   bg-[#17202a] border-[1px] border-[#2c3a4a]">
          <Outlet/>
        </div>
    </div>
  )
}
export default Principale