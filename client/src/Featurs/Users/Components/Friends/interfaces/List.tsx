import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Avatar, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import animation from '../../../../../assets/Images/animation.gif'

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
const List = () => {
 const queryKey = ['friend']
 const getMyFriends = async() =>{
   const friends = await axios.get('http://localhost:8000/friend/getAllFriends')
   return friends.data.message
 }
 const {isLoading,data} = useQuery(queryKey,getMyFriends)
 const HandleClickSort = ()=>{

 }
  return (
    <div className='relative flex flex-col space-y-3 space-x-2 m-4 '>
        <div className="fixed flex justify-center mx-auto">
            <div className=" md:flex  z-10 justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444]">
                <input className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Retrouver des amis..' type='text' />
                <SearchOutlinedIcon sx={{color: '#efefef'}}/>
            </div>
        </div>
        <div className="flex justify-between items-center text-[#efefef] pt-10">
            <h6 className=''>Vos amis</h6>
            <div onClick={HandleClickSort} className="flex space-x-2 items-center text-[#4480ce] cursor-pointer">
                <h6 className=''>Sort</h6>
                <FilterListIcon/>
            </div>
        </div>
        {
           isLoading ? (<img src={animation} alt='animation'/>) :(
            data.friends.map((friend:any,key:number)=>(
              <div key={key} className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                      <StyledBadge
                                 overlap="circular"
                                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                 variant="dot"
                               >
                                 {friend.profilepicture ? (<Avatar src={friend.profilepicture}/>):(<Avatar/>)}
                      </StyledBadge>
                      <div className="flex flex-col">
                          <Link className='text-[#efefef] hover:underline' to={`/users/profile/home/${friend._id}`}>{friend.firstname} {friend.lastname}</Link>
                          <h6 className='text-xs text-[#777]'>20 amis en commun</h6>
                      </div>
                  </div>
                 <div className="text-[#efefef] cursor-pointer">
                   <MoreVertOutlinedIcon />
                 </div>
              </div>
          ))
           )
        }
    </div>
  )
}

export default List