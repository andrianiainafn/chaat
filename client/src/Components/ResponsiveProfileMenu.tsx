import React from 'react'

type Props = {
    showResponsiveMenu:boolean
    HandleClickMenu:()=>void
}

const ResponsiveProfileMenu = (props: Props) => {
  return (
    <div className='menuResponsiveParent' onClick={props.HandleClickMenu}>
        <div className="menuResponsiveChild" onClick={(e)=>e.stopPropagation()}>
            ResponsiveProfileMenu
        </div>
    </div>
  )
}

export default ResponsiveProfileMenu