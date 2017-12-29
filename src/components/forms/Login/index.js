import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../fields/Input'
import Notification from '../../fields/Notification'

const Login = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <div className="container has-text-centered">
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
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
          </div>
          <p class="has-text-grey">
            <a href="/Signup">Sign Up</a>
            &nbsp;·&nbsp;
            <a href="/">Forgot Password</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'login'
})(Login)
