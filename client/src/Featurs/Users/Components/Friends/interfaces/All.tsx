import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import animation from '../../../../../assets/Images/animation.gif'
import { styled, useColorScheme } from '@mui/material/styles'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Avatar, Badge } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddButton from '../elements/AddButton'
import ConfirmOrRemove from '../elements/ConfirmOrRemove'
import { BASEURL } from '../../../../../Components/BaseLink'
import { useCookies } from 'react-cookie'


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
function All(){
  const queryKey = ['all']
  const queryClient = useQueryClient()
  const [cookie] = useCookies()
  const getAll = async ()=>{
      const all = await axios.get(`${BASEURL}/friend/getAll`,{
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie.name}`
        }
      })
      return all.data.message
  }
  const HandleConfirmRequest = async()=>{

  }
  const HandleClcikAdd = async(e:any)=>{
    const userId = e!.currentTarget.getAttribute('data-userid')
    console.log(userId)
    const response = await axios.put(`${BASEURL}/friend/addFriends/${userId}`,{
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    if(response.status === 200){
        console.log(response.data,9696)
        queryClient.invalidateQueries(['chkeckAddfriend',userId])
      }else{
        console.log(response,666)
      }
 }
 const HandleClcikCancel = async(e:any)=>{
  const user = e!.currentTarget.getAttribute('data-userid')
  queryClient.invalidateQueries(['chkeckAddfriend',user])
  const response = await axios.put(`${BASEURL}/friend/addFriends/${user}`,{
    headers:
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie.name}`
    }
  })
  if(response.status === 200){
      console.log(response.data,9696)
    }else{
      console.log(response,666)
    }
}
 const HandleRemoveRequest = ()=>{
  
 }
  const {isLoading,data} = useQuery(queryKey,getAll)
  useEffect(()=>{
    !isLoading && console.log(data)
  },[isLoading])
    return (
      <div className='flex flex-col space-y-4 p-3'>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center text-[#f2f2f2]">
              <h2 className='font-bold'>Friend requests</h2>
              <Link to='/users/friends/request' className='text-[#4480ce]'>See All <ArrowForwardOutlinedIcon sx={{color:'#4480ce'}}/> </Link>
          </div>
          {
              isLoading ? (
                  <></>
              ):(
                !(data[0].legnth === 0) ? (<h6 className='text-[#777]'>You have any friend request now!!</h6>):(
                  data[0].map((request:any,key:number)=>(
                    <div key={key} className="flex justify-between items-center flex-wrap space-y-2">
                        <div className="flex space-x-2 items-center">
                            {
                                request.profilepic ? (<Avatar src={request.profilepic} />) : (<Avatar/>)
                            }
                            <div className="flex flex-col">
                                <Link className='text-[#efefef] hover:underline opacity-80' to='/users/profile/Nomena'>{request.firstname} {request.lastname}</Link>
                                <h6 className='text-xs text-[#777]'>20 amis en commun</h6>
                            </div>
                        </div>
                        <ConfirmOrRemove friend={request}/>
                    </div>
                ))
                )
               
              )
          }
        </div>
        <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center text-[#f2f2f2]">
              <h2 className='font-bold'>Friend Suggestions</h2>
              <Link to='/users/friends/suggestion' className='text-[#4480ce]'>See All <ArrowForwardOutlinedIcon sx={{color:'#4480ce'}}/> </Link>
          </div>
          {
            isLoading ? (<img src={animation} alt='animation'/>):
            (
                data[1].map((suggestion:any,key:number)=>(
                    <AddButton key={key} friend={suggestion} HandleClcikAdd={HandleClcikAdd} HandleClcikCancel={HandleClcikCancel}  />
                ))   
            )
          }
        </div>
        <div className='bg-[#2c3a4a] h-[1px] w-[80%] flex justify-center items-center mx-auto ' />
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center text-[#f2f2f2]">
              <h2 className='font-bold'>Your Friends </h2>
              <Link to='/users/friends/list' className='text-[#4480ce]'>See All <ArrowForwardOutlinedIcon sx={{color:'#4480ce'}}/> </Link>
          </div>
          {
             isLoading ? (<></>) :(
               (data[2].legnth === 0) ? (
                data[2].map((friend:any,key:number)=>(
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
                              <Link className='text-[#efefef] hover:underline opacity-80' to='/users/profile/Nomena'>{friend.firstname} {friend.lastname}</Link>
                              <h6 className='text-xs text-[#777]'>20 amis en commun</h6>
                          </div>
                      </div>
                     <div className="text-[#efefef] cursor-pointer">
                       <MoreVertOutlinedIcon />
                     </div>
                  </div>
              ))
               ):(
                <h6 className='text-[#777]'>You have any friends now <Link to='/users/friends/suggestion' className='text-[#4480ce] underline'>Click here to add more</Link></h6>
               )
             )
          }
        </div>
      </div>
    )
}

export default All