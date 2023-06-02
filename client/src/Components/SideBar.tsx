import { Avatar } from '@mui/material'
import React from 'react'
import Logo from '../assets/Images/logo.png'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const SideBar = () => {
  return (
    <div className='md:flex fixed overflow-x-hidden flex-col hidden space-y-5 pt-5 overflow-scroll  bg-[#17202a] h-screen w-[17%] border-r-[1px] border-[#2c3a4a]'>
        <div className="flex   items-center justify-center">
            <Avatar src={Logo} sx={{marginRight:'1rem'}}/>
            <h2 className='text-[#4480ce] font-bold'>CHAAT</h2>
        </div>
        <div className="flex flex-col space-y-3 pl-5">
            <div className="">
                <NavLink to='/users/' className='text-[#f2f2f2]'> 
                    <div className="flex items-center space-x-2">
                        <HomeIcon /> 
                        <h6 className='text-sm link'>Home</h6>
                    </div>
                </NavLink>
            </div>
            <div className="">
                <NavLink to='/users/friends' className='text-[#f2f2f2]'> 
                    <div className="flex items-center space-x-2">
                        <PeopleOutlineIcon /> 
                        <h6 className='text-sm link'>Friends</h6>
                    </div>
                </NavLink>
            </div>
            <div className="">
                <NavLink to='community' className='text-[#f2f2f2]'> 
                    <div className="flex items-center space-x-2">
                        <LanguageOutlinedIcon /> 
                        <h6 className='text-sm link'>Community</h6>
                    </div>
                </NavLink>
            </div>
            <div className="">
                <NavLink to='saved' className='text-[#f2f2f2]'> 
                    <div className="flex items-center space-x-2">
                        <BookmarkBorderOutlinedIcon /> 
                        <h6 className='text-sm link'>Saved</h6>
                    </div>
                </NavLink>
            </div>
        </div>
        <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
        <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center text-[#f2f2f2] mx-3">
                <h6 className='text-sm'>My Community</h6>
                <div className="bg-[#2c3a4a] flex justify-center items-center text-[#f2f2f2] rounded-full h-7 w-7">
                    <span className='text-sm'>17</span>
                </div>
            </div>
            <div className="flex flex-col  space-y-3 pl-2">
                <div className="flex items-center space-x-2 ">
                    <Avatar sx={{height:'5vh', width: '3vw'}}/>
                    <div className="">
                        <h6 className='text-xs text-[#f2f2f2]'>FCB MADA</h6>
                        <h6 className='text-xs text-[#777]'>3000 members</h6>
                    </div>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Avatar sx={{height:'5vh', width: '3vw'}}/>
                    <div className="">
                        <h6 className='text-xs text-[#f2f2f2]'>React Developers</h6>
                        <h6 className='text-xs text-[#777]'>7M members</h6>
                    </div>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Avatar sx={{height:'5vh', width: '3vw'}}/>
                    <div className="">
                        <h6 className='text-xs text-[#f2f2f2]'>Face Dev</h6>
                        <h6 className='text-xs text-[#777]'>1,7K members</h6>
                    </div>
                </div>
                <div className="flex justify-end items-center pr-3 text-[#f2f2f2]">
                    <NavLink className='text-sm' to=''>
                            <span>View all</span>
                            <ArrowForwardOutlinedIcon sx={{width:'2vw',height:'3vh'}}/>
                    </NavLink>
                </div>
            </div>
        </div>
        <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
        <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center text-[#f2f2f2] mx-3">
                <h6 className='text-sm'>Upcomming Events</h6>
                <div className="bg-[#2c3a4a] flex justify-center items-center text-[#f2f2f2] rounded-full h-7 w-7">
                    <span className='text-sm'>20</span>
                </div>
            </div>
            <div className="flex flex-col  space-y-3 pl-2">
                <div className="flex items-center ">
                    <Avatar sx={{height:'5vh', width: '3vw', marginRight:'1rem'}}/>
                    <div className="">
                        <h6 className='text-xs text-[#f2f2f2]'>Face Dev</h6>
                        <h6 className='text-xs text-[#777]'>1,7K members</h6>
                    </div>
                </div>
                <div className="flex items-center ">
                    <Avatar sx={{height:'5vh', width: '3vw', marginRight:'1rem'}}/>
                    <div className="">
                        <h6 className='text-xs text-[#f2f2f2]'>Face Dev</h6>
                        <h6 className='text-xs text-[#777]'>1,7K members</h6>
                    </div>
                </div>
                <div className="flex justify-end items-center pr-3 text-[#f2f2f2]">
                    <NavLink className='text-sm' to=''>
                        <span>View all</span>
                        <ArrowForwardOutlinedIcon sx={{width:'2vw',height:'3vh'}}/>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar