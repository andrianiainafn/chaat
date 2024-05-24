import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Friends = () => {
  return (
    <div className='relative mt-[8vh]'>
      <div className="h-[25vh] ml-16 fixed hidden md:flex rounded-lg flex-col space-y-3 p-4 w-[25vw] bg-[#17202a] border-[1px] border-[#2c3a4a] ">
          <div className="hidden">
              <NavLink to='/users/friends' className='text-[#f2f2f2]'> 
                  <div className="flex items-center space-x-2">
                      <ListAltIcon /> 
                      <h6 className='text-sm link'>My Friends</h6>
                      <KeyboardArrowRightIcon/>
                  </div>
              </NavLink>
          </div>
          <div className="">
              <NavLink to='/users/friends/list' className='text-[#f2f2f2]'> 
                  <div className="flex items-center space-x-2">
                      <ListAltIcon /> 
                      <h6 className='text-sm link'>My Friends</h6>
                      <KeyboardArrowRightIcon/>
                  </div>
              </NavLink>
          </div>
          <div className="">
              <NavLink to='/users/friends/suggestion' className='text-[#f2f2f2]'> 
                  <div className="flex items-center space-x-2">
                      <PersonAddAlt1Icon/> 
                      <h6 className='text-sm link'>Suggestions</h6>
                      {/* <KeyboardArrowRightIcon/> */}
                  </div>
              </NavLink>
          </div>
          <div className="">
              <NavLink to='/users/friends/request' className='text-[#f2f2f2]'> 
                  <div className="flex items-center space-x-2">
                      <ListAltIcon /> 
                      <h6 className='text-sm link'>Friend request</h6>
                      {/* <KeyboardArrowRightIcon/> */}
                  </div>
              </NavLink>
          </div>
      </div>
      <div className=" mx-2 md:mx-0 fixed overflow-y-scroll scrollbar-hide h-[80%] md:right-16 rounded-lg w-[95%] md:w-[40vw] bg-[#17202a] border-[1px] border-[#2c3a4a]">
        <Outlet/>
      </div>
    </div>
  )
}

export default Friends