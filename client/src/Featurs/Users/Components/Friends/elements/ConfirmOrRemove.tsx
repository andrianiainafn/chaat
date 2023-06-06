import axios from 'axios'
import React, { useState } from 'react'

type Props = {
    friend:any,
}

const ConfirmOrRemove = (props: Props) => {
    const[isConfirme,setIsConfirm] = useState(false)
    const[isRemove,setIsRemove] = useState(false)
    const HandleConfirmRequest = async(e:any)=>{
        const userId = e!.currentTarget.getAttribute('data-userid')
        const request = await axios.put(`http://localhost:8000/friend/AcceptFriendrequest/${userId}`)
        if(request.status === 200){
            setIsConfirm(true)
        }
    } 
    const HandleRemoveRequest = async(e:any)=>{
        const userId = e!.currentTarget.getAttribute('data-userid')
        const request = await axios.put(`http://localhost:8000/friend/deleteFriendRequest/${userId}`)
        if(request.status === 200){
            setIsRemove(true)
        }
    }  
  return (
    <div className="flex space-x-2">
        <div className="text-[#efefef]">
             <button onClick={HandleConfirmRequest} data-userid={props.friend._id} className='bg-[#4480ce] border-none py-1 px-3 rounded-lg' >
                  <div className="flex space-x-2 items-center">
                     <h6 className='text-sm'>Confirme</h6>
                  </div>
             </button>
        </div>
        <div className="text-[#4480ce]">
             <button onClick={HandleRemoveRequest} data-userid={props.friend._id} className='bg-transparent border-[1px] border-[#4480ce] py-1 px-3 rounded-lg' >
                  <div className="flex space-x-2 items-center">
                     <h6 className='text-sm'>Remove</h6>
                  </div>
             </button>
        </div>
    </div>
  )
}

export default ConfirmOrRemove