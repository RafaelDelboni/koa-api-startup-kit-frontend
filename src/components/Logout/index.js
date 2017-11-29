import React from 'react'
import PropTypes from 'prop-types'

const Logout = ({onClick}) => {
  return (
    <div>
      <button type="button"  onClick={onClick}>
        Log Out
      </button>
    </div>
  )
}

Logout.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Logout
