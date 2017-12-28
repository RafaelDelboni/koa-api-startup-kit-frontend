import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Brand, End, Start } from '../../components/Navbar'
import * as authActions from '../../reducks/auth'

class Navbar extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

  onclicklogout = () => {
    this.props.logout(this.props.dispatch)
  }

  render() {
    return (
      <nav className="navbar is-dark topNav">
        <div className="container">
          <Brand />
          <div id="navMenuColordark" className="navbar-menu">
            <Start />
            <End user={this.props.user} logout={this.onclicklogout}/>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ( 
  {
    ...authActions,
    dispatch
  }
)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    Navbar
  )
)
