import React from 'react'

const Notification = ({message, type}) => (
  message 
  ? <div className={"notification " + (type ? 'is-'+type : '')}>
    {message}
  </div>
  : null
)

export default Notification
