import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import TextInput from '../elements/TextInput'
import axios from 'axios'
import {io} from 'socket.io-client'

type Props = {
    open: boolean,
    HandleClick:()=> void
}
function CreatePost({open,HandleClick}:Props) {    
    const socket = io('http://localhost:8000', {
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd"
        }
    });
    const [description,setDescription] = useState<string>('')
    const [images,setImages] = useState<File[]>([])
    const HandleTextChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        console.log(e.target.value)
        setDescription(e.target.value)
    }
    useEffect(()=>{
        socket.on('welcom', (data)=>{
            console.log(data)
        })
        socket.emit('hello','Hello world')
    },[])
    const HandleImageChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        if(files){
            setImages(Array.from(files))
            console.log(images)
        }
    }
    const HandleClickCreate = async()=>{
        const formData = new FormData();
        formData.append('description',description)
        images.map(image=>(
            formData.append('images',image)
        ))
        console.log(formData)
        const createPost = await axios.post('http://localhost:8000/post/create',formData)
        if(createPost.status === 200){
            HandleClick()
        }
    }
  return (
    <>
    {
        open && (
        <AnimatePresence>
          <motion.div 
          initial={{opacity:0,y:-200}}
          animate={{opacity:1,y:0}}
          transition={{duration: 1}}
          className="overlay" onClick={HandleClick}>
            <div className='centrale' onClick={(e)=>e.stopPropagation()}>
                <div className='w-full'>
                    <motion.div className=" bg-[#ffffff16]  rounded-lg mt-1 mx-4 p-3 ">
                        <AnimatePresence>
                                <motion.div 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                 transition={{duration: 1.5}}
                                className="flex flex-col">
                                <TextInput HandleTextChange={HandleTextChange} HandleImageChange={HandleImageChange} />
                                </motion.div>
                        </AnimatePresence>
                    <div className="flex justify-start space-x-4  items-center h-[7vh] mt-2">
                      <button onClick={HandleClickCreate} className='text-[#f2f2f2] bg-[#4480ce]  rounded-lg p-2 md:w-[7vw] w-[17vw]'>
                          Create
                      </button>
                      <button onClick={HandleClick} className='bg-transparent w-[17vw] md:w-[7vw] border border-[#4480ce] text-[#4480ce] p-2 rounded-lg'>
                          Cancel
                      </button>
                    </div>
                </motion.div>
                </div>
            </div>
          </motion.div>
          </AnimatePresence>
        )
    }
    </>
  )
}

export default CreatePost