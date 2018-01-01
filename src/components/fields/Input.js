import React from 'react'

export default ({
  input,
  label,
  placeholder,
  isLarge,
  type,
  disabled,
  meta: {
    touched,
    error
  }
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className={
          "input " +
          (isLarge ? 'is-large ' : '') +
          (touched && error ? 'is-danger' : '')
        }
        {...input}
        placeholder={label || placeholder}
        type={type}
        disabled={disabled}
      />
      {
        touched &&
          error &&
          <p className="help is-danger">{error}</p>
      }
    </div>
  </div>
)
