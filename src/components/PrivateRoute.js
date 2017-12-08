import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props =>
      auth
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/login" }} />
  }/>
)

PrivateRoute.propTypes = {
  auth: PropTypes.object,
  component: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth.token
  }
}

export default connect(
  mapStateToProps,
  null,
  null, {
    pure: false
  }
)(PrivateRoute)
