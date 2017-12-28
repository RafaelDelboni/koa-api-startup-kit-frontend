import React from 'react'
import {Item as NavItem} from '../index'

const MenuGuest = ({user}) => {
  return (
    <div className="navbar-end">
      <NavItem name="Signup" href="/Signup" />
      <NavItem name="Login" href="/Login" />
    </div>
  )
}

export default MenuGuest
