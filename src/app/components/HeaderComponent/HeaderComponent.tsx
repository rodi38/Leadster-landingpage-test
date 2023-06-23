import React from 'react'
import Logo from './LogoComponent'
function HeaderComponent() {
  return (
    <div className="header mx-auto flex justify-center bg-neutral-100 pt-3 pb-3 ">
        <Logo></Logo>
    </div>
  )
}

export default HeaderComponent