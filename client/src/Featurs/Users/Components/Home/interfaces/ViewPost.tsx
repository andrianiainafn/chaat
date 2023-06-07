import React, { useContext, useEffect } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { Avatar, IconButton } from '@mui/material'
import ContextOfPost from '../Context/PostContext';
import axios from 'axios';
import { useQuery  } from '@tanstack/react-query';
import animation from '../../../../../assets/Images/animation.gif'
import Comments from '../elements/Comments';
import CommentInput from '../elements/CommentInput';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    open: boolean,
    HandleClickPost:()=> void
}
const ViewPost = ({open,HandleClickPost}: Props) => {
  const {idPost} = useContext(ContextOfPost)
  const queryKey = ['post']
  const commentqueryKey = ['comment',idPost]
  const getPost = async()=>{
    const pub = await axios.get(`http://localhost:8000/post/getpost/${idPost}`)
    return pub
  }
  const getComment = async()=>{
    const comment = await axios.get(`http://localhost:8000/comment/get/${idPost}`)
    return comment.data.comments
  }
  const {isLoading :commentLoading, data :comments} = useQuery(commentqueryKey,getComment)
  const {isLoading,data} = useQuery(queryKey,getPost)
  useEffect(()=>{
    if(!commentLoading){
      console.log(comments)
    }
  },[commentLoading])
  if(isLoading){
    return (
      <>
          {
            open && (
                <AnimatePresence>
                  <motion.div 
                  initial={{opacity:0,y:-200}}
                  animate={{opacity:1,y:0}}
                  transition={{duration: 1}}
                  className="overlay rounded-lg" onClick={HandleClickPost}>
                    <img src={animation} alt='loading animation' />
                  </motion.div>
                </AnimatePresence>
            )
          }
      </>
    )
  }else{
    return (
      <>
          {
            open && (
                <AnimatePresence>
                  <motion.div 
                  initial={{opacity:0,y:-200}}
                  animate={{opacity:1,y:0}}
                  transition={{duration: 1}}
                  className="overlay rounded-lg" onClick={HandleClickPost}>
                    <div onClick={(e)=>e.stopPropagation()} className='absolute right-2 top-2 z-50 font-bold cursor-pointer'>
                      <IconButton onClick={HandleClickPost}>
                        <CloseIcon sx={{height:'9vh',width:'9vw',color:"#F2f2f2"}}/>
                      </IconButton>
                    </div>
                    <div className='centralePost flex flex-col md:flex-row' data-idpost='idDupost' onClick={(e)=>e.stopPropagation()}>
                        <img className='w-[100%] md:w-[50%] h-[100%]' src={`http://localhost:8000/${data?.data.post.media[0]}`} alt='logo' />
                        <div className='w-[100%] md:w-[50%] h-[100%] bg-[#17202a] relative  overflow-y-scroll' >
                          <div className="bg-[#2c3a4a] md:fixed relative  h-[7vh] w-[100%] md:w-[50%] flex justify-center items-center z-20">
                              <h3 className='text-white'>{data?.data.post.author.lastname}'s post</h3>
                          </div>
                          <div className="flex mt-0 md:mt-[7vh] p-3 items-center space-x-2 ">
                            <Avatar/>
                            <h3 className='text-white'>{data?.data.post.author.lastname} {data?.data.post.author.firstname} .</h3>
                          </div>
                          <div className="text-[#f2f2f2] py-1 px-3 md:p-3 text-sm">
                            {data?.data.post.description}
                           </div>
                           <span className='text-[#777] text-sm p-3' >18 h</span>
                            {
                              comments?.map((comment:object,key:number) =>(
                                 <Comments key={key} comment={comment} />
                              ))
                            }
                          <div className="mb-[14vh] "/>
                           <CommentInput postId={data?.data.post._id}/>
                        </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
            )
          }
      </>
    )
  }
}

export default ViewPost