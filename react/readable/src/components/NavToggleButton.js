import React from 'react'
import { MdMenu } from 'react-icons/lib/md'

const NavToggleButton = ({ size=30 }) => {
  return (
    <button className="nav-toggle-button">
      <MdMenu size={size}></MdMenu>
    </button>
  )
}

export default NavToggleButton