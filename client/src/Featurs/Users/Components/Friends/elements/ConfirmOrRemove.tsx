import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {
    friend:any,
}

const ConfirmOrRemove = (props: Props) => {
    const[isConfirme,setIsConfirm] = useState(false)
    const[isRemove,setIsRemove] = useState(false)
    const queryClient = useQueryClient()
    const HandleConfirmRequest = async(e:any)=>{
        setIsConfirm(true)
        const userId = e!.currentTarget.getAttribute('data-userid')
        const request = await axios.put(`http://localhost:8000/friend/AcceptFriendrequest/${userId}`)
        if(request.status === 200){
            queryClient.invalidateQueries(['request'])
            console.log("andrana voalohany ito")
            setIsConfirm(false)
        }else{
            console.log(request)
        }
    } 
    const HandleRemoveRequest = async(e:any)=>{
        setIsRemove(true)
        const userId = e!.currentTarget.getAttribute('data-userid')
        const request = await axios.put(`http://localhost:8000/friend/deleteFriendRequest/${userId}`)
        if(request.status === 200){
            console.log("andrana voalohany ito")
            queryClient.invalidateQueries(['request'])
            setIsRemove(false)
        }
    }  
  return (
    <div className="flex space-x-2">
        <div className="text-[#efefef]">
             <button onClick={HandleConfirmRequest} data-userid={props.friend._id} className='bg-[#4480ce] border-none py-1 px-3 rounded-lg' >
                  <div className="flex space-x-2 items-center">
                     {
                        isConfirme ? (
                            <h6 className='text-sm'>Loading</h6>
                        ):(
                            <h6 className='text-sm'>Confirme</h6>
                        )
                     }
                  </div>
             </button>
        </div>
        <div className="text-[#4480ce]">
             <button onClick={HandleRemoveRequest} data-userid={props.friend._id} className='bg-transparent border-[1px] border-[#4480ce] py-1 px-3 rounded-lg' >
                  <div className="flex space-x-2 items-center">
                    {
                        isRemove ? (
                            <h6 className='text-sm'>Loading</h6>
                        ):(
                            <h6 className='text-sm'>Remove</h6>
                        )
                     }
                  </div>
             </button>
        </div>
    </div>
  )
}

export default ConfirmOrRemove