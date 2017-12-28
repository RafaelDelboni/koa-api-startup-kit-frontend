import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import App from './containers/App'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Account from './containers/Account'

import logo from './logo.png'
// TODO: REFACTOR THIS FOR SAGAN SAKE

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <nav class="navbar is-dark topNav">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src={logo} alt="Kaskf: Koa Api Startup Kit Frontend" width="112" height="28"/>
            </a>
            <div class="navbar-burger burger" data-target="navMenuColordark-example">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenuColordark-example" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="/">
                Home
              </a>
            </div>

            <div class="navbar-end">
              <a class="navbar-item" href="/Signup">
                Signup
              </a>
              <a class="navbar-item" href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/account" exact component={Account} />
      </Switch>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
