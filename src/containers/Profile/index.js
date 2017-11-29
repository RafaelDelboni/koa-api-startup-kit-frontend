import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import * as userActions from '../../reducks/user'
import LogoutBtn from '../../components/Logout'

class Logout extends Component {
  static propTypes = {
    auth: PropTypes.object,
    logout: PropTypes.func
  }

  onClickLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <h3>Profile</h3>
        <LogoutBtn onClick={this.onClickLogout} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    auth: state.auth.user,
    user: state.user.user
  }
)


export default withRouter(
  connect(
    mapStateToProps,
    {
      ...authActions,
      ...userActions
    }
  )(
    Logout
  )
)
