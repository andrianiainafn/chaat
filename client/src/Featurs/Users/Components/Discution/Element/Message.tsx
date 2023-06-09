import { Avatar } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AuthContext from '../../../../../Context/GlobalContext'

type Props = {
    mess:any
}

const Message = (props: Props) => {
  const {userId} = useContext(AuthContext)
  return (
    <>
    {
        props.mess.author._id === userId ? (
        <div className="flex justify-end mt-2 ml-2">
            <div className="bg-[#0099FF]  rounded-full p-2  ">
                {props.mess.message}
            </div>
        </div>
        ) : (
        <div className="flex justify-start space-x-1">
            <Avatar />
            <div className=" bg-[#2c3a4a] rounded-full p-2  ">
                {props.mess.message}
            </div>
        </div>
        )
    }
    </>
  )
}

export default Message