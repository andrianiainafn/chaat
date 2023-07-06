import React from 'react'
import Logo from '../../../../../assets/Images/logo.png'
import { Avatar, IconButton } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link, NavLink } from 'react-router-dom';

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='flex justify-between items-center text-white text-2xl w-full p-3 '>
        <div className="flex items-center">
          <Avatar src={Logo} sx={{marginRight:'1rem'}}/>
          <h2 className='text-[#4480ce] font-bold text-base'>CHAAT</h2>
        </div>
        <div className="text-white md:hidden flex">
          <IconButton>
            <MenuOutlinedIcon sx={{color:"white"}}/>
          </IconButton>
        </div>
        <div className="hidden md:flex justify-between md:w-[20%] text-base">
          <Link to='#home' className='hover:text-[#4480ce]'>Home</Link>
          <Link to='#about' className='hover:text-[#4480ce]'>About</Link>
          {/* <NavLink to='#'></NavLink> */}
        </div>
        <div className="text-base flex items-center space-x-1 md:space-x-5">
          <a href='/auth/login' className='hover:text-[#4480ce]'> Login</a>
          <div className="border border-white rounded-md p-1 hover:border-[#4480ce] hover:text-[#4480ce]">
            <a href='/auth/signup'> Signup</a>
          </div>
        </div>
    </div>
  )
}

export default NavBar