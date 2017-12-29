import React from 'react'

export default ({
  input,
  label,
  placeholder,
  isLarge,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div className="field">
    <label>{label}</label>
    <div className="control">
      <input
        className={"input " + (isLarge ? 'is-large' : '')}
        {...input}
        placeholder={label || placeholder}
        type={type}
      />
      {
        touched &&
          error && 
          <span className="notification is-danger">
            {error}
          </span>
      }
    </div>
  </div>
)
