import React, { useContext, useEffect, useState } from 'react'
import ClickCreatePost from '../elements/ClickCreatePost';
import CreatePost from './CreatePost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ViewPost from './ViewPost';
import Post from '../elements/Post';
import animation from '../../../../../assets/Images/animation.gif'
import ContextOfPost from '../Context/PostContext';
import { BASEURL } from '../../../../../Components/BaseLink';

const Home = () => {
  const [isCreate,setIsCreate] =  useState<boolean>(false)
  const [posts,setPosts] = useState([])
  const {ModifyIdPost} = useContext(ContextOfPost)
  const [isPostView,setIsPostView] = useState<boolean>(false)
  const HandleClickIsCreate:()=>void = ()=>{
    setIsCreate(ancien=>!ancien)
  }
  const HandleClickPost=(newPostId:any)=>{
    if(newPostId){
      console.log(newPostId.actu[0])
      ModifyIdPost(newPostId.actu[0]._id)
    }
    setIsPostView(ancien=>!ancien)
  }
  const HandleClickPostBool:()=>void = ()=>{
    setIsPostView(ancien=>!ancien)
  }
  const queryKey = ['posts']
  const getPost = async()=>{
    const pub = await axios.get(`${BASEURL}/actuality`)
    return pub
  }
  const {isLoading,data } = useQuery(queryKey, getPost)
  useEffect(()=>{
    if(data){
      console.log(JSON.parse(data.data.message))
      setPosts(JSON.parse(data.data.message))
    }
  },[isLoading])
  useEffect(()=>{
    console.log(posts)
  },[posts])
  if(isLoading){
    return (
      <div className=' flex mx-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
          <img src={animation} alt='loading animation'/>
      </div>
    )
  }
  else{
    return (
      <div className=' flex ml-1 mr-2 mb-5 md:mx-5 justify-around mt-[8vh]'>
        {
          isCreate && (
            <CreatePost open={isCreate} HandleClick={HandleClickIsCreate}/>
          )
        }
        {
          isPostView && (
            <ViewPost open={isPostView} HandleClickPost={HandleClickPostBool} />
          )
        }
        <div className="w-[100%] md:w-[50%]">
           <div className="bg-[#17202a] border-[1px] border-[#2c3a4a] rounded-lg">
              <ClickCreatePost HandleClick={HandleClickIsCreate} />
           </div>
          {
            posts.map((post:any,key)=>(
                post.actu[0] ? (<Post key={key} post={post.actu[0]} HandleClickPost={()=>HandleClickPost(post)}/>):(
                  <div key={key}></div>
                )
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