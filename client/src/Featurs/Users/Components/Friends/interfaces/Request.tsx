import React from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import animation from '../../../../../assets/Images/animation.gif'

const Request = () => {
  const queryKey = ['request']
  const getRequest = async()=>{
    const request = await axios.get('http://localhost:8000/friend/getFriendRequest')
    return request.data.message
  }
  const HandleConfirmRequest = ()=>{

  } 
  const HandleRemoveRequest = ()=>{

  }   
  const {isLoading,data} = useQuery(queryKey,getRequest)
  const friends = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
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
                 data.friends.map((friend:any,key:number)=>(
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
                        <div className="flex space-x-2">
                            <div className="text-[#efefef]">
                                 <button onClick={HandleConfirmRequest} data-userId={friend._id} className='bg-[#4480ce] border-none py-1 px-3 rounded-lg' >
                                      <div className="flex space-x-2 items-center">
                                         <h6 className='text-sm'>Confirme</h6>
                                      </div>
                                 </button>
                            </div>
                            <div className="text-[#4480ce]">
                                 <button onClick={HandleRemoveRequest} data-userId={friend._id} className='bg-transparent border-[1px] border-[#4480ce] py-1 px-3 rounded-lg' >
                                      <div className="flex space-x-2 items-center">
                                         <h6 className='text-sm'>Remove</h6>
                                      </div>
                                 </button>
                            </div>
                        </div>
                    </div>
                ))
            )
        }
    </div>
  )
}

export default Request
