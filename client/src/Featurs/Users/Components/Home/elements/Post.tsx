import { Avatar } from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Reaction from './Reaction';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import moment from 'moment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useState,useEffect} from 'react'
import { BASEURL } from '../../../../../Components/BaseLink';
import { useCookies } from 'react-cookie';

type Props = {
    post: any,
    HandleClickPost: ()=>void
  }
  
const Post = (props: Props) => {
  const queryClient = useQueryClient()
  const queryKey = ['checksave',props.post._id]
  const [hasnewReaction, setHasNewReaction] = useState<any>([])
  const [test,setTest]= useState(false)
  const [cookie] = useCookies()
  const checkSaved = async()=>{
      const saved = await axios.get(`${BASEURL}/post/checkSaved`)
      return saved.data.message
  }
  const {isLoading,data} = useQuery(queryKey,checkSaved) 
  const HandleClickReaction = async(e: any)=>{
    const postId = e!.currentTarget.getAttribute('data-postid')
    const response = await axios.put(`${BASEURL}/post/reaction/${postId}`,{
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.name}`
      }
    })
    if(response.status === 200){
      console.log("Fa aona no tsy mety kosa eee")
        console.log(response.data,9696)
        setHasNewReaction((reaction:any)=>[...reaction,response.data])
        queryClient.invalidateQueries(['reaction',postId])
      }else{
        setTest(an=>!an)
        console.log(response,666)
      }
    }
    const HandleClickSave = async(e: any) => {
        const postId = e!.currentTarget.getAttribute('data-postid')
        const sendSave = await axios.put(`${BASEURL}/post/save/${postId}`,{
          headers:
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.name}`
          }
        })
        if(sendSave.status === 200){
          queryClient.invalidateQueries(['checksave',postId])
          console.log('post saved successfuly')
        }else{
          console.log('error when saving postss')
        }
    }
    const HandleClickUnsaved = async(e:any)=>{
      const postId = e!.currentTarget.getAttribute('data-postid')
      const sendSave = await axios.put(`${BASEURL}/post/unsave/${postId}`,{
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie.name}`
        }
      })
      if(sendSave.status === 200){
        queryClient.invalidateQueries(['checksave',postId])
        console.log('post saved successfuly')
      }else{
        console.log('error when saving postss')
      }
    }
    useEffect(()=>{

    },[])
  return (
    <div data-postid={props.post._id}  className="bg-[#17202a] flex flex-col space-y-2 border-[1px]  border-[#2c3a4a] rounded-lg mt-3">
        <div className="p-2 flex w-full justify-between items-center">
          <div className="flex items-center ">
            {
              props.post.profilepicture ? (
                <Avatar src={`${BASEURL}/${props.post.profilepicture}`} sx={{height:'2em', width: '2em', marginRight:'1rem'}}/>
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
               {
                isLoading ? <></> : (
                  data?.includes(props.post._id) ? (<BookmarkIcon data-postid={props.post._id} onClick={HandleClickUnsaved} className='cursor-pointer' sx={{color:"#efefef"}} />) : (
                    <BookmarkBorderOutlinedIcon data-postid={props.post._id} onClick={HandleClickSave} className='cursor-pointer' sx={{color:"#efefef"}}/>
                  )
                )
               }
               <MoreVertOutlinedIcon className='cursor-pointer' sx={{color:"#efefef"}}/>
          </div>
        </div>
        <div className="text-[#efefef] m-2 text-sm ">
          <p>
            {props.post.description}
          </p>
        </div>
        <div className="w-full">
          <img src={`${BASEURL}/${props.post.media[0]}`}  className='w-full h-[34vh]' alt='example' />
        </div>
        <div className="w-full p-2 flex justify-between items-center">
          <div data-postid={props.post._id} onClick={HandleClickReaction} className="cursor-pointer flex items-center justify-between  ">
            <Reaction id={props.post._id} />
          </div>
          <div onClick={props.HandleClickPost} className="cursor-pointer flex items-center justify-between ">
            <ModeCommentOutlinedIcon  sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
            <p className='text-[#efefef] text-xs '>{props.post.comments.length} comments</p>
          </div>
            {
              test && (
              <div className=" cursor-pointer flex items-center justify-between ">
                <ShareOutlinedIcon sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
                <p className='text-[#efefef] text-xs '>7 shares</p>
              </div>
              )
            }
        </div>
    </div>
  )
}

export default Post