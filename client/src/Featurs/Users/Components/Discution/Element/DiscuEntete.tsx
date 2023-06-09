import React, { useContext, useEffect, useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar } from '@mui/material';
import AuthContext from '../../../../../Context/GlobalContext';
import { info } from 'console';

type Props = {
    information:any,
    ClickDiscu:()=>void
}

const DiscuEntete = (props: Props) => {
  const userId = useContext(AuthContext)
  const [destination,setDestination] = useState({
    id:'',
    firstname:'',
    lastname:''
  })
  const getDestination = ()=>{
    if(props.information.author._id === userId){
        setDestination({
            id: props.information.destination._id,
            firstname: props.information.destination.firstname,
            lastname: props.information.destination.lastname
        })
    }else{
        setDestination({
            id: props.information.author._id,
            firstname: props.information.author.firstname,
            lastname: props.information.author.lastname
        }) 
    }
  }
  useEffect(()=>{
    getDestination()
  },[])

  return (
    <div className="bg-[#2c3a4a] md:w-[55vw] md:right-4 overflow-x-hidden overflow-hidden  z-10  h-[8vh]  rounded-t-lg w-full flex justify-between items-center  fixed   ">
        <div className="flex space-x-2 items-center">
          <Avatar/>
          <div className="">
            <h5 className='text-[#f2f2f2] cursor-pointer hover:underline'>
                {destination.firstname} {destination.lastname}
            </h5>
            <div className="flex space-x-1 items-center">
              <div className="bg-[#44b700] rounded-full h-3 w-3"/>
              <h6 className='text-sm text-[#777]'>Actif</h6>
            </div>
          </div>
        </div>
        <div onClick={props.ClickDiscu} className="flex md:hidden items-center space-x-1 cursor-pointer">
          <h6 className='text-sm text-[#777] hover:underline'>Discu</h6>
          <ChatIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
        </div>
    </div>
  )
}

export default DiscuEntete