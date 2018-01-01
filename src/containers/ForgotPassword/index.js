import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import ForgotPasswordForm from '../../components/forms/ForgotPassword'

class ForgotPassword extends Component {
  static propTypes = {
    auth: PropTypes.object,
    forgotPassword: PropTypes.func
  }

  onClickForgotPassword = (values) => {
    this.props.forgotPassword(values)
  }

  render() {
    return (this.props.auth && this.props.auth.token 
      ?
      <Redirect to={{ pathname: "/" }} />
      :
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <h3 className="title has-text-grey">Forgot your password?</h3>
            <p className="subtitle has-text-grey">Please enter your email.</p>
            <div className="box"> 
              <ForgotPasswordForm onSubmit={this.onClickForgotPassword} />
            </div>
            <p className="has-text-grey">
              <a href="/Signup">Sign Up</a>
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
    ForgotPassword
  )
)
