import React from 'react'

type Props = {}

const EditProfile = (props: Props) => {
  const HandleChange = ()=>{

  }
  return (
    <div className='p-3'>
      <label htmlFor="fname" className='opacity-90'>Firstname</label>
      <input onChange={HandleChange} className='w-[95%]  placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' type='text' name='fname' placeholder='Your first name...'/>
    </div>
  )
}

export default EditProfile