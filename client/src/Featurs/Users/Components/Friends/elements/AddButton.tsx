import React from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type Props = {
    friend:any,
    HandleClcikAdd:(e:any)=>void
}

const AddButton = (props: Props) => {
 const queryKey = ['chkeckAddfriend',props.friend._id]
 const CheckAddFriend = async ()=>{
    const add = await axios.get('http://localhost:8000/friend/checkFriendRequest')
    return add.data.message
 }
 const {isLoading,data} = useQuery(queryKey,CheckAddFriend)
 
  return (
        <div  className="flex justify-between items-center">
             <div className="flex space-x-2 items-center">
                 {
                     props.friend.profilepic ? (<Avatar src={props.friend.profilepic}/>):(<Avatar/>) 
                 }
                 <div className="flex flex-col">
                     <Link className='text-[#efefef] hover:underline' to='/users/profile/Nomena'>{props.friend.firstname} {props.friend.lastname}</Link>
                     <h6 className='text-xs text-[#777]'>20 amis en commun</h6>
                 </div>
             </div>
            <div className="text-[#efefef]">
                  {
                    isLoading ? (
                        <span className='text-sm'>Loading</span>
                    ):(
                        data.includes(props.friend._id) ? (
                            <button onClick={props.HandleClcikAdd} data-userid={props.friend._id} className='bg-transparent border-[1px] border-[#fff] py-1 px-3 rounded-lg' >
                                <div className="flex space-x-2 items-center">
                                   <h6>Cancek</h6>
                                   <PersonAddAlt1Icon/>
                                </div>
                            </button>
                        ):(
                            <button onClick={props.HandleClcikAdd} data-userid={props.friend._id} className='bg-[#4480ce] border-none py-1 px-3 rounded-lg' >
                                <div className="flex space-x-2 items-center">
                                   <h6>Add</h6>
                                   <PersonAddAlt1Icon/>
                                </div>
                            </button>
                        )
                    )
                  }

            </div>
        </div>
  )
}

export default AddButton