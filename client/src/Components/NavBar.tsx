import React, { useContext, useEffect } from 'react'
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, Badge, IconButton } from '@mui/material';
import Logo from '../assets/Images/logo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { styled } from '@mui/material/styles'
import Yor from '../assets/Images/yor.jpg'
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/GlobalContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
const NavBar = () => {
  const {connected,firstname,profilepicture} = useContext(AuthContext)
  useEffect(()=>{
    console.log(connected,firstname,profilepicture)
  },[connected])
  return (
    <div className='flex fixed justify-between items-center px-3 w-full md:w-[83%] z-10 bg-[#17202a] h-[8vh] border-b-[1px] border-[#2c3a4a]'>
        {/* <div className="hidden md:flex">
            <h3 className='text-3xl text-white'>text</h3>
        </div> */}
        <div className="hidden md:flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444]">
            <input className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Explore Chaat..' type='text' />
            <SearchOutlinedIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
        </div>
        <div className="flex justify-between w-full md:w-[25%] items-center">
            <div className="flex items-center md:hidden cursor-pointer">
                <Avatar src={Logo} sx={{marginRight:'0.5rem'}}/>
                <h3 className='text-[#4480ce]'>Chaat</h3>
            </div>
            <div className="flex md:hidden cursor-pointer ">
              <NavLink className='text-[#efefef]' to='/users/'>
                  <HomeIcon  />  
              </NavLink>  
            </div>
            <div className="flex md:hidden cursor-pointer ">
                <NavLink className='text-[#efefef]'  to='/users/friends/list'>
                    <PeopleOutlineIcon  />
                </NavLink>
            </div>
            <div className="cursor-pointer ">
                <NavLink to='/users/messages/89898'>              
                  <Badge badgeContent={20} color="error">
                    <MarkChatUnreadOutlinedIcon sx={{color: '#efefef'}}/>
                  </Badge>
              </NavLink>
            </div>
            <div className="cursor-pointer">
              <NavLink to='/users/notifications'>
                <Badge badgeContent={17} color="error">
                    <NotificationsNoneOutlinedIcon sx={{color: '#efefef'}}/>
                </Badge>
              </NavLink>
            </div>
            <div className="cursor-pointer flex md:hidden">
                <IconButton>
                  <MenuOutlinedIcon sx={{color: '#efefef'}}/>
                </IconButton>
            </div>
            <div className=" hidden md:flex justify-center items-center cursor-pointer">
                <h3 className='text-[#f2f2f2] mr-2'>{firstname}</h3>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar src={Yor}   />
                </StyledBadge>
                <ExpandMoreOutlinedIcon sx={{color: '#efefef'}} />
            </div>
        </div>
    </div>
  )
}


export default NavBar