import { Avatar, Badge, styled } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
type Props = {}


const Discution = (props: Props) => {
  return (
//   <div className='relative flex flex-col space-y-3 space-x-2 m-4 '>
//     <div className="fixed  mx-auto bg-[#2c3a4a] w-[40vw]">
//         <Avatar/>
//         <div className="">
//           <h5 className='text-[#f2f2f2] cursor-pointer hover:underline'>Anya Forger</h5>
//           <div className="flex space-x-1 items-center">
//             <div className="bg-[#44b700] rounded-full h-3 w-3"/>
//          <h6 className='text-sm text-[#777]'>Actif</h6>
//          </div>
//          </div>
//     </div>
//     <div className="flex justify-between items-center text-[#efefef] pt-10">
//         <h6 className=''>Vous connaissez ?</h6>
//         <div className="flex space-x-2 items-center text-[#4480ce]">
//             <h6 className=''>Sort</h6>
//             {/* <FilterListIcon/> */}
//         </div>
//     </div>
// </div>
    <>
    <div className="bg-[#2c3a4a] right-4   z-10  h-[8vh] w-[55vw] fixed flex space-x-2 items-center ">
        <Avatar/>
        <div className="">
          <h5 className='text-[#f2f2f2] cursor-pointer hover:underline'>Anya Forger</h5>
          <div className="flex space-x-1 items-center">
            <div className="bg-[#44b700] rounded-full h-3 w-3"/>
            <h6 className='text-sm text-[#777]'>Actif</h6>
          </div>
        </div>
    </div>
    <div className='fixed right-4 bg-[#17202a] w-[55vw] h-[85vh] overflow-scroll py-2 px-4'>
      <div className="mt-[8vh]"/>
        <div className="flex justify-end">
          <div className="bg-[#0099FF]  rounded-full p-2  ">
              Heyy
          </div>
        </div>
        <div className="flex justify-start">
          <div className=" bg-[#2c3a4a] rounded-full p-2  ">
              Heyy
          </div>
        </div>
    </div>
    <div className="bottom-4 right-4 w-[55vw] fixed flex justify-center space-x-3">
      <div className="flex justify-between items-center border-[1px] rounded-full py-1 px-2 border-[#444] overflow-hidden">
              <input type='text' className='outline-none text-[#f2f2f2] border-none bg-transparent' placeholder='Your message..' />
              <AddReactionOutlinedIcon className='text-[#fefefe]'/>
      </div>
      <button className='flex justify-center items-center bg-[#2c3a4a] text-sm space-x-2 text-[#f2f2f2] px-2 border-[1px] border-[#444] rounded-full '>
        <h6>Send Message</h6>
        <SendIcon sx={{color: '#efefef',cursor: 'pointer'}}/>
      </button>
    </div>

    </>
  )
}

export default Discution