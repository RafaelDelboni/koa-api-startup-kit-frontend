import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as userActions from '../../reducks/user'
import AccountForm from '../../components/forms/Account'

class Account extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchUser()
  }

  onClickSaveUser = (values) => {
    this.props.saveUser(values)
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <h3 className="title has-text-grey">Account</h3>
            <AccountForm
              initialValues={this.props.user}
              onSubmit={this.onClickSaveUser}
            />
          </div>
        </div>
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
      ...userActions
    }
  )(
    Account
  )
)
