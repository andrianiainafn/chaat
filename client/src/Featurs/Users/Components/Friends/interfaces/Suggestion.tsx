import React from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Suggestion = () => {
 const friends = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className='relative flex flex-col space-y-3 space-x-2 m-4 '>
        <div className="fixed flex justify-center mx-auto">
            <div className=" md:flex  z-10 justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444]">
                <input className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Retrouver des amis..' type='text' />
                <SearchOutlinedIcon sx={{color: '#efefef'}}/>
            </div>
        </div>
        <div className="flex justify-between items-center text-[#efefef] pt-10">
            <h6 className=''>Vous connaissez ?</h6>
            <div className="flex space-x-2 items-center text-[#4480ce]">
                <h6 className=''>Sort</h6>
                <FilterListIcon/>
            </div>
        </div>
        {
            friends.map(friend=>(
                <div key={friend} className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <Avatar/>
                        <div className="flex flex-col">
                            <Link className='text-[#efefef]' to='/users/profile/Nomena'>Anya Forger</Link>
                            <h6 className='text-xs text-[#777]'>20 amis en commun</h6>
                        </div>
                    </div>
                   <div className="text-[#efefef]">
                        <button className='bg-[#4480ce] border-none py-1 px-3 rounded-lg' >
                             <div className="flex space-x-2 items-center">
                                <h6>Add</h6>
                                <PersonAddAlt1Icon/>
                             </div>
                        </button>
                   </div>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestion