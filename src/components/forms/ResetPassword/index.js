import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../fields/Input'
import Notification from '../../fields/Notification'
import validate from './validate'

const ResetPassword = props => {
  const { error, handleSubmit, submitting, submitSucceeded } = props
  let submitedWithSuccess = !submitting && submitSucceeded
  let success = "Success! Try to login again."
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="subtitle is-3">{props.initialValues.email}</h1>
      <Field
        name="password"
        type="password"
        component={renderField}
        placeholder="Password"
        isLarge={true}
        disabled={submitting || submitSucceeded}
      />
      <Field
        name="passwordConfirm"
        type="password"
        component={renderField}
        placeholder="Confirm Password"
        isLarge={true}
        disabled={submitting || submitSucceeded}
      />
      <Notification
        type={submitedWithSuccess ? "success" : "danger"}
        message={submitedWithSuccess ? success : error}
      />
      <button
        className="button is-info is-large is-fullwidth"
        type="submit"
        disabled={submitting || submitSucceeded}
      >
        Change Password
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'resetPassword',
  validate
})(ResetPassword)
