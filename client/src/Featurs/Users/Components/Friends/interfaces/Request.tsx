import React from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import animation from '../../../../../assets/Images/animation.gif'
import ConfirmOrRemove from '../elements/ConfirmOrRemove';
import { BASEURL } from '../../../../../Components/BaseLink';

const Request = () => {
  const queryKey = ['request']
  const getRequest = async()=>{
    const request = await axios.get(`${BASEURL}/friend/getFriendRequest`)
    return request.data.message
  } 
  const {isLoading,data} = useQuery(queryKey,getRequest)
  return (
    <div className='relative flex flex-col space-y-3 space-x-2 m-4 '>
        <div className="flex justify-between items-center text-[#efefef] ">
            <h6 className=''>Vous connaissez ?</h6>
            <div className="flex space-x-2 items-center text-[#4480ce]">
                <h6 className=''>Sort</h6>
                <FilterListIcon/>
            </div>
        </div>
        {
            isLoading ? (
                <img src={animation} alt='animation' />
            ):(
                 data.map((friend:any,key:number)=>(
                    <div key={key} className="flex justify-between items-center flex-wrap space-y-2">
                        <div className="flex space-x-2 items-center">
                            {
                                friend.profilepic ? (<Avatar src={friend.profilepic} />) : (<Avatar/>)
                            }
                            <div className="flex flex-col">
                                <Link className='text-[#efefef] hover:underline' to='/users/profile/Nomena'>{friend.firstname} {friend.lastname}</Link>
                                <h6 className='text-xs text-[#777]'>20 amis en commun</h6>
                            </div>
                        </div>
                        <ConfirmOrRemove  friend={friend}  />
                    </div>
                ))
            )
        }
    </div>
  )
}

export default Request
