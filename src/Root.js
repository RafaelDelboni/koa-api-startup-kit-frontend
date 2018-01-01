import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './containers/Navbar'
import App from './containers/App'
import Login from './containers/Login'
import Signup from './containers/Signup'
import ForgotPassword from './containers/ForgotPassword'
import ResetPassword from './containers/ResetPassword'
import Account from './containers/Account'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Navbar />
      <section className="section">
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot" exact component={ForgotPassword} />
          <Route path="/reset/:token/:email" exact component={ResetPassword} />
          <PrivateRoute path="/account" exact component={Account} />
        </Switch>
      </section>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
