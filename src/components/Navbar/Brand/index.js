import React from 'react'
import {logo} from '../../../images'

const NavbarStart = () => {
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img
          src={logo}
          alt="Kaskf: Koa Api Startup Kit Frontend"
          width="112"
          height="28"
        />
      </a>
      <div className="navbar-burger burger" data-target="navMenuColordark">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default NavbarStart
