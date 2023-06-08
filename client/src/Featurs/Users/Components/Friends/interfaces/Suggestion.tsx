import React, { useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import animation from '../../../../../assets/Images/animation.gif'
import AddButton from '../elements/AddButton';

const Suggestion = () => {
 const querykey = ['suggestion']
 const getsuggestion = async()=>{
     const suggestion = await axios.get('http://localhost:8000/friend/getSuggestions')
     return suggestion.data.message
 }
 const queryClient = useQueryClient()
 const {isLoading,data} = useQuery(querykey,getsuggestion)
 const HandleClcikAdd = async(e:any)=>{
     const user = e!.currentTarget.getAttribute('data-userid')
     queryClient.invalidateQueries(['chkeckAddfriend',user])
    const response = await axios.put(`http://localhost:8000/friend/addFriends/${user}`)
    if(response.status === 200){
        console.log(response.data,9696)
      }else{
        console.log(response,666)
      }
 }
    const HandleClcikCancel = async(e:any)=>{
        const user = e!.currentTarget.getAttribute('data-userid')
        queryClient.invalidateQueries(['chkeckAddfriend',user])
        const response = await axios.put(`http://localhost:8000/friend/addFriends/${user}`)
        if(response.status === 200){
            console.log(response.data,9696)
          }else{
            console.log(response,666)
          }
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
            <h6 className=''>Vous connaissez ?</h6>
            <div className="flex space-x-2 items-center text-[#4480ce]">
                <h6 className=''>Sort</h6>
                <FilterListIcon/>
            </div>
        </div>
        {
            isLoading ? (<img src={animation} alt='animation'/>):
            (
                data.map((friend:any,key:number)=>(
                    <AddButton key={key} friend={friend} HandleClcikAdd={HandleClcikAdd} HandleClcikCancel={HandleClcikCancel} />
                ))   
            )
        }
    </div>
  )
}

export default Suggestion