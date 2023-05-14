import React, { useContext, useEffect } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import Logo from '../../../../../assets/Images/logo.png'
import { Avatar } from '@mui/material'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendIcon from '@mui/icons-material/Send';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { CommentsDisabled } from '@mui/icons-material';
import ContextOfPost from '../Context/PostContext';

type Props = {
    open: boolean,
    HandleClickPost:()=> void
}
const Comments = [1,2,3,4,5,6]
const ViewPost = ({open,HandleClickPost}: Props) => {
  const {idPost} = useContext(ContextOfPost)
  useEffect(()=>{console.log(idPost)},[idPost])
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
                        <div className='centralePost flex ' data-idpost='idDupost' onClick={(e)=>e.stopPropagation()}>
                            <img className='w-[50%] h-[100%]' src={Logo} alt='logo' />
                            <div className='w-[50%] h-[100%] bg-[#17202a] relative  overflow-y-scroll' >
                              <div className="bg-[#2c3a4a] fixed top-0 h-[7vh] w-[50%] flex justify-center items-center z-20">
                                  <h3 className='text-white'>Anya Forger's post</h3>
                              </div>
                              <div className="flex mt-[7vh] p-3 items-center space-x-2 ">
                                <Avatar/>
                                <h3 className='text-white'>Anya Forger .</h3>
                              </div>
                              <div className="text-[#f2f2f2] p-3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, excepturi corrupti pariatur ut, a voluptate voluptatibus quaerat culpa aliquam,
                               ipsa incidunt saepe nam quisquam. Quasi, sapiente nesciunt? Nihil, esse et!
                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic vitae, esse saepe quas, laboriosam id ut consequuntur odio sunt molestiae neque officiis ab aliquid quisquam
                               , quibusdam at placeat culpa dignissimos?
                               </div>
                               <span className='text-[#777] text-sm p-3' >18 h</span>
                                {
                                  Comments.map(comment =>(
                                    <div key={comment} data-idcomment='idcomment' className="flex justify-between items-center w-full pr-3">
                                    <div className="text-[#f2f2f2] p-3 flex items-center space-x-2">
                                      <Avatar/>
                                          <div className="flex flex-col space-y-1">
                                             <div className="">
                                                <span className='font-semibold hover:underline'>Loyd Forger</span> je commente 
                                             </div>
                                             <div className='text-[#777] flex items-center space-x-3 text-sm'>
                                                <span className='cursor-pointer' >18 h</span>
                                                <span className='font-semibold cursor-pointer hover:underline'> 25 j'aime</span>
                                                <span className='cursor-pointer hover:underline'>repondre</span>
                                             </div>
                                        </div>
                                    </div>
                                    <FavoriteOutlinedIcon className='text-[#ec6b60] cursor-pointer '/>
                                  </div>
                                  ))
                                }
                                <div className="mb-[14vh]"/>
                               <div className="bg-[#2c3a4a] p-3 fixed  bottom-0 h-[14vh] justify-between w-[50%] flex  z-20 ">
                                  <div className="flex-col space-y-2">
                                    <div className="flex space-x-2 text-[#f2f2f2] items-center">
                                      <FavoriteOutlinedIcon className='text-[#ec6b60]'/>
                                      <ModeCommentOutlinedIcon/>
                                      {/* <ShareOutlinedIcon/> */}
                                    </div>
                                    <div className="">
                                      <span className='text-[#f2f2f2] font-semibold'> 1 235 j'aime</span>
                                    </div>
                                  </div>
                                  <AddReactionOutlinedIcon className='text-[#f2f2f2]'/>
                                  <div className="overflow-hidden border-[2px] rounded-3xl h-[9vh] relative  border-[#444] flex justify-center items-center p-2">
                                    <textarea className='bg-transparent outline-none w-[14vw] p-2 text-[#f2f2f2] '  placeholder='Add comments...'/>
                                  </div>
                                  <button className="border-[2px] text-[#f2f2f2] rounded-3xl h-[9vh] px-2 border-[#444] flex justify-center items-center space-x-1">
                                    <span className='text-base'>Publier</span>
                                    <SendIcon />
                                  </button>
                               </div>
                            </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                )
        }
    </>
  )
}

export default ViewPost