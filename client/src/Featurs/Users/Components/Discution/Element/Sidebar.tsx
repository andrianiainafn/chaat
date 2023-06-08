import React, { useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Badge, styled } from '@mui/material';
import { Link } from 'react-router-dom';


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
interface Props{
  discuList:any
}
function Sidebar(props:Props) {
  const discution = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className=' fixed hidden md:flex flex-col overflow-x-hidden bg-[#17202a]  text-[#f2f2f2] w-[25%] p-4  space-y-4 overflow-scroll h-[85vh] '>
        <div className="flex flex-col space-y-3">
            <h3>Your Discutions</h3>
            <div className="hidden md:flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444]">
                <input className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Search Discution..' type='text' />
                <SearchOutlinedIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
            </div>
        </div>
        <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
        {
            props.discuList.map((discution:any)=>(
            <Link to={`/users/messages/${discution._id}`} key={discution}>
              <div className="" >
                <div className="flex space-x-2 ">
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <Avatar    />
                    </StyledBadge>
                    <div className="flex flex-col space-y-1">
                        <h5>{discution.firstname}</h5>
                        <h6 className='text-xs text-[#777]'>You: Heyy .1h</h6>
                    </div>
                </div>
              </div>
            </Link>
            ))
        }
    </div>
  )
}

export default Sidebar
