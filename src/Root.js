import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './Root.css'
import PrivateRoute from './components/PrivateRoute'
import App from './containers/App'
import Login from './containers/Login'

const Profile = () => <h3>Profile</h3>
const Root = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/profile" exact component={Profile} />
    </Switch>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
