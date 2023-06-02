import { Avatar } from '@mui/material';
import React,{useContext} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import AuthContext from '../Context/GlobalContext';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

type Props = {
    showMenu: boolean,
    HandleClickProfile:()=>void
}

const ReponsiveMenu = (props: Props) => {
  const {connected,firstname,profilepicture} = useContext(AuthContext)
  const navigate = useNavigate()
  const HandleClickProfile = () =>{
      navigate(`/users/profile/${firstname}`)
      props.HandleClickProfile()
  }
  const HandleClickLogout = ()=>{

  }
  return (
    <div className='menuParent' onClick={props.HandleClickProfile}>
        <div className="menuChild border-[1px] border-[#2c3a4a] p-3" onClick={(e)=>e.stopPropagation()}>
          <div className="flex flex-col space-y-3">
            <div onClick={HandleClickProfile} className="flex space-x-2 cursor-pointer ">
              <Avatar/>
              <Link to='' >
                <div className="flex flex-col ">
                  <h3 className='text-[#f2f2f2] hover:underline'>{firstname}</h3>
                  <h6 className='text-[#f2f2f2] text-sm'>View your profile</h6>
                </div>
              </Link>
            </div>
            <div className='bg-[#2c3a4a] h-[2px] w-[80%] flex justify-center items-center mx-auto ' />
            <Link to=''>
              <div className="flex space-x-2 text-[#f2f2f2] hover:underline cursor-pointer ">
                  <SettingsOutlinedIcon/>
                  <h6 className='text-sm'>Settings</h6>
              </div>
            </Link>
            <Link to=''>
              <div className="flex space-x-2 text-[#f2f2f2] hover:underline cursor-pointer">
                  <InfoOutlinedIcon/>
                  <h6 className='text-sm'>About</h6>
              </div>
            </Link>
            <Link to=''>
              <div className="flex space-x-2 text-[#f2f2f2] hover:underline cursor-pointer">
                  <HelpOutlineOutlinedIcon/>
                  <h6 className='text-sm'>Help && Privacy</h6>
              </div>
            </Link>
            <div onClick={HandleClickLogout} className="flex space-x-2 text-[#f2f2f2] hover:underline cursor-pointer">
                <LogoutOutlinedIcon/>
                <h6 className='text-sm'>Log out</h6>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ReponsiveMenu