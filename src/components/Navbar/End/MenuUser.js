import React from 'react'
import PropTypes from 'prop-types'
import {Item as NavItem} from '../index'

const MenuUser = ({user, logout}) => {
  return (
    <div className="navbar-end">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="/Account">
          {user.username}
        </a>
        <div className="navbar-dropdown is-boxed">
          <NavItem name="Account" href="/Account" />
          <NavItem name="Logout" onClick={logout} />
        </div>
      </div>
    </div>
  )
}

MenuUser.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

export default MenuUser
