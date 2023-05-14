import React, { useEffect, useState } from 'react'
import ClickCreatePost from '../elements/ClickCreatePost';
import CreatePost from './CreatePost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ViewPost from './ViewPost';
import Post from '../elements/Post';
import animation from '../../../../../assets/Images/animation.gif'

const Home = () => {
  const [isCreate,setIsCreate] =  useState<boolean>(false)
  const [isPostView,setIsPostView] = useState<boolean>(false)
  const HandleClickIsCreate:()=>void = ()=>{
    setIsCreate(ancien=>!ancien)
  }
  const HandleClickPost:()=>void=()=>{
    setIsPostView(ancien=>!ancien)
  }
  const queryKey = ['posts']
  const getPost = async()=>{
    const pub = await axios.get('http://localhost:8000/actuality')
    return pub
  }
  const {isLoading,data } = useQuery(queryKey, getPost)
  const list = [1,2,3,4,5]
  useEffect(()=>{
    console.log(data)
    if(data){
      console.log(JSON.parse(data.data.message))
    }
  },[isLoading])
  if(isLoading){
    return (
      <div className=' flex mx-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
          <img src={animation} alt='loading animation'/>
      </div>
 
    )
  }
  else{
    return (
      <div className=' flex mx-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
        {
          isCreate && (
            <CreatePost open={isCreate} HandleClick={HandleClickIsCreate}/>
          )
        }
        {
          isPostView && (
            <ViewPost open={isPostView} HandleClickPost={HandleClickPost} />
          )
        }
        <div className="w-[100%] md:w-[50%]">
           <div className="bg-[#17202a] border-[1px] border-[#2c3a4a] rounded-lg">
              <ClickCreatePost HandleClick={HandleClickIsCreate} />
           </div>
          {
            list.map(post=>(
                <Post post={post} HandleClickPost={HandleClickPost}/>
            ))
          }
        </div>
        {/* <div className="hidden md:w-[30%]  bg-[#17202a] md:flex flex-col space-y-2 border-[1px] p-2 border-[#2c3a4a] rounded-lg ">
  
        </div> */}
      </div>
    )
  }
  
}

export default Home