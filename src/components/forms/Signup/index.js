import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../fields/Input'
import Notification from '../../fields/Notification'
import validate from './validate'

const Signup = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={renderField}
        placeholder="Email"
        isLarge={true}
      />
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
      <Field
        name="passwordConfirm"
        type="password"
        component={renderField}
        placeholder="Confirm Password"
        isLarge={true}
      />
      <Notification type="danger" message={error} />
      <div>
        <button className="button is-info is-large is-fullwidth" type="submit" disabled={submitting}>
          Sign up
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup',
  validate
})(Signup)
