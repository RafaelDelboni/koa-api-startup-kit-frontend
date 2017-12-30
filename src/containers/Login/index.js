import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import LoginForm from '../../components/forms/Login'

class Login extends Component {
  static propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func
  }

  onClickLogin = (values) => {
    this.props.login(values)
  }

  render() {
    return (this.props.auth && this.props.auth.token 
      ?
      <Redirect to={{ pathname: "/" }} />
      :
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box"> 
              <LoginForm onSubmit={this.onClickLogin} />
            </div>
            <p className="has-text-grey">
              <a href="/Signup">Sign Up</a>
              &nbsp;·&nbsp;
              <a href="/">Forgot Password</a>
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
    Login
  )
)
