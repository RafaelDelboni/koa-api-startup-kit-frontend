import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../fields/Input'
import validate from './validate'
import Notification from '../../fields/Notification'

const Account = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
      />
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Notification type="danger" message={error} />
      <div>
        <button className="button is-info" type="submit" disabled={submitting}>
          Save
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'account',
  validate
})(Account)
