import React, { useContext, useEffect, useState } from 'react'
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
import ProfileMenu from './ProfileMenu';
import ResponsiveProfileMenu from './ResponsiveProfileMenu';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BASEURL } from './BaseLink';
import { useCookies } from 'react-cookie';

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
  const [showMenu,setShowMenu] = useState<boolean>(false)
  const [showResponsiveMenu,setShowResponsiveMenu] = useState<boolean>(false)
  const queryKey = ['getConversationLink']
  const messNotifKey = ['getMessNotif']
  const [cookie] = useCookies()
  const getMessNotif = async()=>{
    const messNotif = await axios.get(`${BASEURL}/message/notif`,{
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    if(messNotif.status === 200){
      return messNotif.data.message
    }
  }
  const {isLoading : loading, data : messNotif} = useQuery(messNotifKey,getMessNotif)
  const getConversationLink = async() =>{
    const conversationLink = await axios.get(`${BASEURL}/conversation/getDefaultConversation`,{
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    return conversationLink.data.message
  }
  const {isLoading,data} = useQuery(queryKey,getConversationLink)
  const HandleClickProfile = ()=>{
    setShowMenu(ancien=>!ancien)
  }
  const HandleClickMenu = () =>{
    setShowResponsiveMenu(ancien=>!ancien)
  }
  useEffect(()=>{
    !isLoading && console.log("ireto ireo conversation azo ",data)
  },[isLoading])
  useEffect(()=>{
    !loading && console.log(messNotif,1616)
  },[loading])
  return (
    <>
    {
      showMenu && (
        <ProfileMenu HandleClickProfile={HandleClickProfile} showMenu={showMenu}  />
        )
    }
    { 
      showResponsiveMenu && (
        <ResponsiveProfileMenu HandleClickMenu={HandleClickMenu} showResponsiveMenu={showResponsiveMenu}/>
      )
    }
    
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
                {
                    isLoading ? (<></>)
                  :(
                    <NavLink className='text-[#efefef]' to={`/users/messages/${data}`}>              
                      <Badge badgeContent={20} color="error">
                        <MarkChatUnreadOutlinedIcon />
                      </Badge>
                    </NavLink>
                  )
                }
            </div>
            <div className="cursor-pointer">
              <NavLink className='text-[#efefef]' to='/users/notifications'>
                <Badge badgeContent={17} color="error">
                    <NotificationsNoneOutlinedIcon />
                </Badge>
              </NavLink>
            </div>
            <div onClick={HandleClickMenu} className="cursor-pointer flex md:hidden">
                <IconButton>
                  {
                     showResponsiveMenu ? (<CloseIcon sx={{color: '#efefef'}}/>) : 
                     ( <MenuOutlinedIcon sx={{color: '#efefef'}}/>
                     )                                      
                  }
                </IconButton>
            </div>
            <div onClick={HandleClickProfile} className=" hidden md:flex justify-center items-center cursor-pointer">
                <h3 className='text-[#f2f2f2] mr-2'>{firstname}</h3>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar src={`${BASEURL}/${profilepicture}`}   />
                </StyledBadge>
                <ExpandMoreOutlinedIcon sx={{color: '#efefef'}} />
            </div>
        </div>
    </div>
    </>
  )
}


export default NavBar