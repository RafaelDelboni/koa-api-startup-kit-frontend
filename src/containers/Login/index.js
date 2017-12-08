import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import LoginForm from '../../components/Login'

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
      ? <Redirect to={{ pathname: "/" }} /> 
      : <LoginForm onSubmit={this.onClickLogin} />
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
