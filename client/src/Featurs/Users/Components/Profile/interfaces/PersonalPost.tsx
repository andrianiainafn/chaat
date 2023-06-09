import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ContextOfPost from '../../Home/Context/PostContext'
import Post from '../../Home/elements/Post'
import animation from '../../../../../assets/Images/animation.gif'
import ViewPost from '../../Home/interfaces/ViewPost'
import { useLocation } from 'react-router-dom'

type Props = {}

const PersonalPost = (props: Props) => {
  const queryKey = ['personalPost']
  const {ModifyIdPost} = useContext(ContextOfPost)
  const [isCreate,setIsCreate] =  useState<boolean>(false)
  const [isPostView,setIsPostView] = useState<boolean>(false)
  const location = useLocation()
  const user_id = location.pathname.split('/')[4]
  const getPersonalPost = async()=>{
      const personalPost = await axios.get(`http://localhost:8000/post/getUserPost/${user_id}`)
      return personalPost.data.message
  }
  const {isLoading,data} = useQuery(queryKey,getPersonalPost)
  useEffect(()=>{
    !isLoading && console.log(data)
  },[isLoading])
    const HandleClickPost=(newPostId:any)=>{
      if(newPostId){
        console.log(newPostId)
        ModifyIdPost(newPostId._id)
      }
      setIsPostView(ancien=>!ancien)
    }
    const HandleClickPostBool:()=>void = ()=>{
      setIsPostView(ancien=>!ancien)
    }
  return (
    <>
      {
        isPostView && (
          <ViewPost open={isPostView} HandleClickPost={HandleClickPostBool}/>
        )
      }
      {
        isLoading ? (
          <img src={animation} alt='animation' />
        ):(
          <div className="pl-1 pr-2 md:w-[50%] md:mx-auto mb-5">
            {
              data.map((post:any,key:number)=>(
                  post ? (<Post key={key} post={post} HandleClickPost={()=>HandleClickPost(post)}/>):(
                    <div key={key}></div>
                  )
              ))
            }
          </div>
        )
      }
    </>
  )
}

export default PersonalPost