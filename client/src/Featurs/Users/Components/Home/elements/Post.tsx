import { Avatar } from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query';
import Reaction from './Reaction';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import moment from 'moment';


type Props = {
    post: any,
    HandleClickPost: ()=>void
  }
  
const Post = (props: Props) => {
  const queryClient = useQueryClient()
  const queryKey = ['checksave',props.post._id]
  const HandleClickReaction = async(e: any)=>{
    const postId = e!.currentTarget.getAttribute('data-postid')
    const response = await axios.put(`http://localhost:8000/post/reaction/${postId}`)
    if(response.status === 200){
        console.log(response.data,9696)
        queryClient.invalidateQueries(['reaction',postId])
      }else{
        console.log(response,666)
      }
    }
    const HandleClickSave = async() => {
        const sendSave = await axios.post('')
    }
    
  return (
    <div data-postid={props.post._id}  className="bg-[#17202a] flex flex-col space-y-2 border-[1px]  border-[#2c3a4a] rounded-lg mt-3">
        <div className="p-2 flex w-full justify-between items-center">
          <div className="flex items-center ">
            {
              props.post.profilepicture ? (
                <Avatar src={`http://localhost:8000/${props.post.profilepicture}`} sx={{height:'2em', width: '2em', marginRight:'1rem'}}/>
              ):(
                <Avatar  sx={{height:'2em', width: '2em', marginRight:'1rem'}}/>
              )
            }
            <div className="">
                <h6 className='text-xs text-[#efefef]'>{props.post.author.lastname}</h6>
                <h6 className='text-xs text-[#777]'>{moment(props.post.date).fromNow()}</h6>
            </div>
          </div>
          <div className="flex items-center space-x-2">
               <BookmarkBorderOutlinedIcon onClick={HandleClickSave} className='cursor-pointer' sx={{color:"#efefef"}}/>
               <MoreVertOutlinedIcon className='cursor-pointer' sx={{color:"#efefef"}}/>
          </div>
        </div>
        <div className="text-[#efefef] m-2 text-sm ">
          <p>
            {props.post.description}
          </p>
        </div>
        <div className="w-full">
          <img src={`http://localhost:8000/${props.post.media[0]}`}  className='w-full h-[34vh]' alt='example' />
        </div>
        <div className="w-full p-2 flex justify-between items-center">
          <div data-postid={props.post._id} onClick={HandleClickReaction} className="cursor-pointer flex items-center justify-between  ">
            <Reaction id={props.post._id} />
          </div>
          <div onClick={props.HandleClickPost} className="cursor-pointer flex items-center justify-between ">
            <ModeCommentOutlinedIcon  sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
            <p className='text-[#efefef] text-xs '>{props.post.comments.length} comments</p>
          </div>
          <div className=" cursor-pointer flex items-center justify-between ">
            <ShareOutlinedIcon sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
            <p className='text-[#efefef] text-xs '>7 shares</p>
          </div>
        </div>
    </div>
  )
}

export default Post