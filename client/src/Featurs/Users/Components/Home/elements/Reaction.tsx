import React, {useEffect, useContext } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import AuthContext from '../../../../../Context/GlobalContext';
import { BASEURL } from '../../../../../Components/BaseLink';
type Props = {
    id: string
}

const Reaction = ({id}: Props) => {
    const{userId} = useContext(AuthContext)
    const queryKey = ['reaction',id]
    const check = async()=>{
        const react = await axios.get(`${BASEURL}/post/checkReaction/${id}`)
        return react.data.message
    }
    const {isLoading,data}= useQuery(queryKey,check)
    useEffect(()=>{
        if(!isLoading){
            console.log(data.length)
        }
    },[isLoading])
    if(isLoading){
        return (
            <p>Loading ...</p>
        )
    }else{
        return (
        <>
            {
                isLoading ? (
                    <p>Loading...</p>
                ):(
                    data.includes(userId) ? (
                        <FavoriteOutlinedIcon sx={{color:'#ec6b60',marginRight:'0.4rem'}} />
                        ):(
                        <FavoriteBorderOutlinedIcon sx={{color:"#efefef" ,marginRight:'0.4rem'}}  />
                    )
                )
            }
            <p className='text-[#efefef] text-xs '>{data.length} love</p>
        </>
        )
    }      
}

export default Reaction