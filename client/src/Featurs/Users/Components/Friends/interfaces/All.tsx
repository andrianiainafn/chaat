import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

function All(){
  const queryKey = ['all']
  const getAll = async ()=>{
      const all = await axios.get('http://localhost:8000/friend/getAll')
      return all.data.message
  }
  const {isLoading,data} = useQuery(queryKey,getAll)
  useEffect(()=>{
    !isLoading && console.log(data)
  },[isLoading])
    return (
      <div>All</div>
    )
}

export default All