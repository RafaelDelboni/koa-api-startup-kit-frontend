import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './Root.css'
import PrivateRoute from './components/PrivateRoute'
import App from './containers/App'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Account from './containers/Account'

const Root = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <PrivateRoute path="/account" exact component={Account} />
    </Switch>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
