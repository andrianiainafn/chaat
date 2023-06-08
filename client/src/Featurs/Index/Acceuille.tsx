import React from 'react'

type Props = {}

const Acceuille = (props: Props) => {
  return (
    <div className='flex justify-center items-center text-white text-2xl mx-20'>
        <a href='/auth/login'> Login</a>
        <a href='/auth/signup'> Signup</a>
    </div>
  )
}

export default Acceuille