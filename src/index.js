import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './Root'
import configureStore from './store/configureStore'
import { loadState } from './helpers/localStorage'

import registerServiceWorker from './infra/registerServiceWorker'

const persistedState = loadState()
const store = configureStore(persistedState)

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker();
