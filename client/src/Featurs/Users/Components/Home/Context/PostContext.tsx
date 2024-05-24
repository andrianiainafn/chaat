import axios from 'axios'
import React, { createContext, PropsWithChildren, useState } from 'react'

interface IthemeContext{
    idPost: string,
    ModifyIdPost: (newIdPost:string)=>void,
}
const ContextOfPost = createContext<IthemeContext>({
    idPost:'test',
    ModifyIdPost: (newIdPost:string)=>{},
})
const PostContext = ({children}:PropsWithChildren) => {
  const [idPost,setIdPost] = useState<string>('test')
  const ModifyIdPost = (newIdPost:string) =>{setIdPost(newIdPost)}

  return (
    <ContextOfPost.Provider value={{idPost,ModifyIdPost}}>
        {children}
    </ContextOfPost.Provider>
  )
}
export {PostContext}
export default ContextOfPost