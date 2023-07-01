import React from 'react'
import Logo from '../../../../../assets/Images/logo.png'
import { Avatar, IconButton } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='flex justify-between items-center text-white text-2xl w-full p-3'>
        <div className="flex items-center">
          <Avatar src={Logo} sx={{marginRight:'1rem'}}/>
          <h2 className='text-[#4480ce] font-bold text-base'>CHAAT</h2>
        </div>
        <div className="text-white">
          <IconButton>
            <MenuOutlinedIcon sx={{color:"white"}}/>
          </IconButton>
        </div>
        <div className="text-base flex items-center space-x-1">
          <a href='/auth/login'> Login</a>
          <div className="border border-white rounded-md p-1">
            <a href='/auth/signup'> Signup</a>
          </div>
        </div>
    </div>
  )
}

export default NavBar