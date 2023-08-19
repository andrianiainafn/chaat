import { Avatar, Badge, styled } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../../../Context/GlobalContext';


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
  discu:any
}

const Conversation = (props: Props) => {
    const {userId} = useContext(AuthContext)
    useEffect(()=>{
      console.log(props.discu.authorInfo[0].firstname,"premier")
      console.log(props.discu.destinationInfo[0].firstname,"deuxxieme")
    },[])
  return (
    <Link to={`/users/messages/${props.discu.conversation}`} className='mt-5 pt-5' >
    <div className="mt-5" >
      <div className="flex space-x-2 ">
    {
      userId === props.discu.authorInfo[0]._id ? (
        <>
          <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          >
            <Avatar  src={`${props.discu.destinationInfo[0].profilepicture}`} />
          </StyledBadge>
          <div className="flex flex-col space-y-1">
            <h5 className='text-[#444]'>{props.discu.destinationInfo[0].firstname}</h5>
            <h6 className='text-xs text-[#777]'>You: {props.discu.message}</h6>
          </div>
        </>
      ) : (
        <>
          <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          >
            <Avatar src={`${props.discu.authorInfo[0].profilepicture}`}  />
          </StyledBadge>
          <div className="flex flex-col space-y-1">
            <h5 className='text-[#444]'>{props.discu.authorInfo[0].firstname}</h5>
            <h6 className='text-xs text-[#777]'>{props.discu.message}</h6>
          </div>
        </>
      )

    }
      </div>
    </div>
  </Link>
  )
}

export default Conversation