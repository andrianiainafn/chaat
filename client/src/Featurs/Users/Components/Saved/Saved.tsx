import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import animation from '../../../../assets/Images/animation.gif'
import Post from '../Home/elements/Post'

const Saved = () => {
  const queryKey = ['postSaved']
  const getPostSaved = async  () => {
    const postSaved = await axios.get('http://localhost:8000/getSavedPost')
    return postSaved.data.message
  }
  const {isLoading,data} = useQuery(queryKey,getPostSaved)
  useEffect(()=>{
    !isLoading && console.log(data,9090)
  },[isLoading])
  return (
    <div className=' flex ml-1 mr-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
        {
          isLoading ? (
            <img src={animation} alt="animation loading gif"/>
          ) : (
            <></>
          )
        }
    </div>
  )
}

export default Saved