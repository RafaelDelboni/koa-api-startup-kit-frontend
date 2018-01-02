import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../fields/Input'
import Notification from '../../fields/Notification'
import validate from './validate'

const Login = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        placeholder="Username"
        isLarge={true}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        placeholder="Password"
        isLarge={true}
      />
      <Notification type="danger" message={error} />
      <button className="button is-info is-large is-fullwidth" type="submit" disabled={submitting}>
        Log In
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate
})(Login)
