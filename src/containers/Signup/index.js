import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as userActions from '../../reducks/user'
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
    user: state.user
  }
)

export default withRouter(
  connect(
    mapStateToProps,
    userActions
  )(
    Signup
  )
)
