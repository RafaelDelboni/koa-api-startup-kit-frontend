import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import SignupForm from '../../components/forms/Signup'

class Signup extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  onClickSaveUser = (values) => {
    this.props.signupUser(values)
  }

  render() {
    return (this.props.auth && this.props.auth.token 
      ? <Redirect to={{ pathname: "/" }} /> 
      : <SignupForm onSubmit={this.onClickSaveUser} />
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    auth: state.auth
  }
)

export default withRouter(
  connect(
    mapStateToProps,
    authActions
  )(
    Signup
  )
)
