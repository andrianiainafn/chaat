import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import animation from '../../../../assets/Images/animation.gif'
import ContextOfPost from '../Home/Context/PostContext'
import Post from '../Home/elements/Post'
import ViewPost from '../Home/interfaces/ViewPost'
import { BASEURL } from '../../../../Components/BaseLink'

const Saved = () => {
  const queryKey = ['postSaved']
  const {ModifyIdPost} = useContext(ContextOfPost)
  const [isPostView,setIsPostView] = useState<boolean>(false)
  const getPostSaved = async  () => {
    const postSaved = await axios.get(`${BASEURL}/post/getSavedPost`)
    return postSaved.data.message
  }
  const {isLoading,data} = useQuery(queryKey,getPostSaved)
  useEffect(()=>{
    console.log("je test")
    !isLoading && console.log(data,9090)
  },[isLoading])
  const HandleClickPost = (newPostId: any)=>{
    ModifyIdPost(newPostId._id)
    setIsPostView(ancien=>!ancien)
  }
  const HandleClickPostBool:()=>void = () => {
    setIsPostView(ancien=>!ancien)
  }
  return (
    <div className=' flex ml-1 mr-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
        {
          isPostView && (
            <ViewPost open={isPostView} HandleClickPost={HandleClickPostBool}/>
          )
        }
        {
          isLoading ? (
              <div className="">
                <img src={animation} alt="animation loading"/>
              </div>
          ):(
            <div className="w-[100%] md:w-[50%]">
              {
                data.map((post:any,key:number)=>(
                  <Post post={post} key={key} HandleClickPost={()=>HandleClickPost(post)}/>
                ))
              }
            </div>
          )
        }
    </div>
  )
}

export default Saved