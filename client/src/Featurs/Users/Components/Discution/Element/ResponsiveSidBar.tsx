import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Badge, IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

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

type Props = {
    open: boolean,
    ClickDiscu:()=>void
}

const ResponsiveSidBar = (props: Props) => {
  const discution = [1,2,3,4,5,6,7,8,9,10]
  return (
  <div onClick={(e)=>e.stopPropagation()} className='overlayDiscu block md:hidden   bg-[#17202a] w-[100vw]  text-[#f2f2f2]   overflow-scroll h-[100vh] '>
    <div className="flex flex-col space-y-3 ">
        <div className="flex justify-between items-center w-[100%]">
          <h3 className='text-[#444]'>Your Discutions</h3>
          <IconButton onClick={props.ClickDiscu}>
            <CloseIcon sx={{color:'#444'}}/>
          </IconButton>
        </div>
        <div className="hidden md:flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444]">
            <input className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Search Discution..' type='text' />
            <SearchOutlinedIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
        </div>
    </div>
    <div className='bg-[#2c3a4a] mt-4 h-[1px] w-[80%] flex justify-center items-center mx-auto  ' />
    <div className="mt-10"/>
    {
        discution.map((message)=>(
        <Link to='/users/messages/33436' className='mt-5 pt-5' key={message}>
          <div className="mt-5" >
            <div className="flex space-x-2 ">
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  >
                  <Avatar   />
                </StyledBadge>
                <div className="flex flex-col space-y-1">
                    <h5 className='text-[#444]'>Loyd Forger</h5>
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

export default ResponsiveSidBar