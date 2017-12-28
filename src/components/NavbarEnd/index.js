import React from 'react'
import PropTypes from 'prop-types'

const NavbarEnd = ({user}) => {
  return (
    <div class="navbar-end">
      <a class="navbar-item" href="/Signup">
        Signup
      </a>
      <a class="navbar-item" href="/login">
        Login
      </a>
    </div>
  )
}

NavbarEnd.propTypes = {
  user: PropTypes.object
}

export default NavbarEnd
