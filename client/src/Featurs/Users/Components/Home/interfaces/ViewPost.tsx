import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

type Props = {
    open: boolean,
    HandleClickPost:()=> void
}

const ViewPost = ({open,HandleClickPost}: Props) => {
  return (
    <>
        {
                open && (
                    <AnimatePresence>
                      <motion.div 
                      initial={{opacity:0,y:-200}}
                      animate={{opacity:1,y:0}}
                      transition={{duration: 1}}
                      className="overlay" onClick={HandleClickPost}>
                        <div className='centrale' onClick={(e)=>e.stopPropagation()}>
                            test
                        </div>
                      </motion.div>
                    </AnimatePresence>
                )
        }
    </>
  )
}

export default ViewPost