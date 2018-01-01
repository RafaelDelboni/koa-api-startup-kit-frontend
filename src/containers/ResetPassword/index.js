import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import ResetPasswordForm from '../../components/forms/ResetPassword'

class ResetPassword extends Component {
  static propTypes = {
    auth: PropTypes.object,
    resetPassword: PropTypes.func
  }

  onClickResetPassword = (values) => {
    this.props.resetPassword(values)
  }

  render() {
    return (this.props.auth && this.props.auth.token 
      ?
      <Redirect to={{ pathname: "/" }} />
      :
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <h3 className="title has-text-grey">Reset your password</h3>
            <p className="subtitle has-text-grey">Please enter your new password.</p>
            <div className="box"> 
              <ResetPasswordForm
                onSubmit={this.onClickResetPassword}
                initialValues={
                  {
                    email: this.props.match.params.email,
                    token: this.props.match.params.token
                  }
                }
              />
            </div>
            <p className="has-text-grey">
              <a href="/Forgot">Forgot Password</a>
              &nbsp;·&nbsp;
              <a href="/Login">Login</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    authActions
  )(
    ResetPassword
  )
)
