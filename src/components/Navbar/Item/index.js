import React from 'react'
import PropTypes from 'prop-types'

const NavbarItem = ({name, href, onClick}) => {
  return (
    <a className="navbar-item" href={href} onClick={onClick}>
      {name}
    </a>
  )
}

NavbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default NavbarItem
