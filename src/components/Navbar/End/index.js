import React from 'react'
import PropTypes from 'prop-types'
import MenuUser from './MenuUser'
import MenuGuest from './MenuGuest'

const NavbarEnd = ({user, logout}) => {
  if (!user.username) {
    return <MenuGuest />
  } else {
    return <MenuUser user={user} logout={logout} />
  }
}

NavbarEnd.propTypes = {
  user: PropTypes.object,
  onClickLogout: PropTypes.func
}

export default NavbarEnd
