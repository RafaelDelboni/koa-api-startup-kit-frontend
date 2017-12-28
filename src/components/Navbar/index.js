import React from 'react'
import PropTypes from 'prop-types'
import {logo} from '../../images'
import NavbarStart from '../NavbarStart'
import NavbarEnd from '../NavbarEnd'

const Navbar = ({user}) => {
  return (
    <nav class="navbar is-dark topNav">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src={logo}
              alt="Kaskf: Koa Api Startup Kit Frontend"
              width="112"
              height="28"
            />
          </a>
          <div class="navbar-burger burger" data-target="navMenuColordark">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuColordark" class="navbar-menu">
          <NavbarStart />
          <NavbarEnd user={user} />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  user: PropTypes.object
}

export default Navbar
