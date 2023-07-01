import React from 'react'
import NavBar from './Components/NavBbar'
import Content from './Components/Content'


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col space-y-10'>
      <NavBar/>
      <Content/>
    </div>
  )
}

export default Hero