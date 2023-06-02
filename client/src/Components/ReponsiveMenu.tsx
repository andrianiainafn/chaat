import React from 'react'

type Props = {
    showMenu: boolean,
    HandleClickProfile:()=>void
}

const ReponsiveMenu = (props: Props) => {
  return (
    <div className='menuParent' onClick={props.HandleClickProfile}>
        <div className="menuChild" onClick={(e)=>e.stopPropagation()}>
            
        </div>
    </div>
  )
}

export default ReponsiveMenu