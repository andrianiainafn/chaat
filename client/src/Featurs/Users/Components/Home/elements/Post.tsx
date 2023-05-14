import { Avatar } from '@mui/material'
import Logo from '../../../../../assets/Images/logo.png'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GroupsIcon from '@mui/icons-material/Groups';

type Props = {
    post: Object,
    HandleClickPost: ()=>void
}

const Post = (props: Props) => {
  return (
    <div  className="bg-[#17202a] flex flex-col space-y-2 border-[1px]  border-[#2c3a4a] rounded-lg mt-3">
        <div className="p-2 flex w-full justify-between items-center">
          <div className="flex items-center ">
            <Avatar sx={{height:'2em', width: '2em', marginRight:'1rem'}}/>
            <div className="">
                <h6 className='text-xs text-[#efefef]'>FCB MADA</h6>
                <h6 className='text-xs text-[#777]'>3000 members</h6>
            </div>
          </div>
          <div className="flex items-center space-x-2">
               <BookmarkBorderOutlinedIcon className='cursor-pointer' sx={{color:"#efefef"}}/>
               <MoreVertOutlinedIcon className='cursor-pointer' sx={{color:"#efefef"}}/>
          </div>
        </div>
        <div className="text-[#efefef] m-2 text-sm ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos dolorem, error tempore dicta porro nostrum sint expedita mollitia labore magni,
            nobis adipisci voluptatibus eligendi rerum iusto ad quidem aspernatur deleniti?
          </p>
        </div>
        <div className="w-full">
           <img src={Logo} className='w-full h-[34vh]' alt='example' />
        </div>
        <div className="w-full p-2 flex justify-between items-center">
          <div className="cursor-pointer flex items-center justify-between  ">
            <FavoriteOutlinedIcon  sx={{color:'#ec6b60',marginRight:'0.4rem'}}/>
            <p className='text-[#efefef] text-xs hidden md:flex'>You,and 192 others</p>
          </div>
          <div onClick={props.HandleClickPost} className="cursor-pointer flex items-center justify-between ">
            <ModeCommentOutlinedIcon  sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
            <p className='text-[#efefef] text-xs hidden md:flex'>187 comments</p>
          </div>
          <div className=" cursor-pointer flex items-center justify-between ">
            <ShareOutlinedIcon sx={{color:"#efefef" ,marginRight:'0.4rem'}}/>
            <p className='text-[#efefef] text-xs hidden md:flex'>7 shares</p>
          </div>
        </div>
    </div>
  )
}

export default Post