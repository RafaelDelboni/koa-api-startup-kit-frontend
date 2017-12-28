import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as authActions from '../../reducks/auth'
import * as userActions from '../../reducks/user'
import AccountForm from '../../components/forms/Account'
import LogoutBtn from '../../components/Logout'

class Account extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchUser()
  }

  onClickLogout = () => {
    this.props.logout()
  }

  onClickSaveUser = (values) => {
    this.props.saveUser(values)
  }

  render() {
    if (this.props.user.isFetching) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <h3>Account</h3>
        <AccountForm
          initialValues={this.props.user}
          onSubmit={this.onClickSaveUser}
        />
        <LogoutBtn onClick={this.onClickLogout} />
      </div>
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
    {
      ...authActions,
      ...userActions
    }
  )(
    Account
  )
)
