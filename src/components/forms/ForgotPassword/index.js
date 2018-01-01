import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../fields/Input'
import Notification from '../../fields/Notification'
import validate from './validate'

const ForgotPassword = props => {
  const { error, handleSubmit, submitting, submitSucceeded } = props
  let success = "Password reset link sent ;)"
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={renderField}
        placeholder="Email"
        isLarge={true}
      />
      <Notification
        type={!submitting && submitSucceeded ? "success" : "danger"}
        message={!submitting && submitSucceeded ? success : error}
      />
      <button
        className="button is-info is-large is-fullwidth"
        type="submit"
        disabled={submitting}
      >
        Reset Password
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'forgotPassword',
  validate
})(ForgotPassword)
