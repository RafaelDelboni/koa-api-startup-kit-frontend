import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import * as userActions from '../../reducks/user'
import LogoutBtn from '../../components/Logout'

class Account extends Component {
  static propTypes = {
    auth: PropTypes.object,
    user: PropTypes.object,
    logout: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchUser()
  }

  onClickLogout = () => {
    this.props.logout()
  }

  render() {
    if (this.props.user.isFetching) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h3>Account</h3>
        <div>{this.props.user.firstName}</div>
        <LogoutBtn onClick={this.onClickLogout} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    auth: state.auth.user,
    user: state.user
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
    Account
  )
)
