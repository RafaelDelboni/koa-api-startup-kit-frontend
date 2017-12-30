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
      ?
      <Redirect to={{ pathname: "/" }} /> 
      :
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <h3 className="title has-text-grey">Signup</h3>
            <p className="subtitle has-text-grey">We need some basic information about you.</p>
            <div className="box">
              <SignupForm onSubmit={this.onClickSaveUser} />
            </div>
          </div>
        </div>
      </div>
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
