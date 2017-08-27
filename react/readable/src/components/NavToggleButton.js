import React from 'react'
import { MdMenu } from 'react-icons/lib/md'

const NavToggleButton = ({ size=30, toggleNavCallback=function(){} }) => {
  return (
    <button className="nav-toggle-button" onClick={toggleNavCallback}>
      <MdMenu size={size}></MdMenu>
    </button>
  )
}

export default NavToggleButton