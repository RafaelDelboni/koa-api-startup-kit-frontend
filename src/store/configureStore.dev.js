import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import throttle from 'lodash/throttle'
import { saveState } from '../helpers/localStorage'
import api from '../middleware/api'
import rootReducer from '../reducks'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        api,
        loadingBarMiddleware({
          promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
        }),
        createLogger()
      ),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducks', () => {
      store.replaceReducer(rootReducer)
    })
  }

  store.subscribe(
    throttle(
      () => {
        saveState({
          auth: store.getState().auth,
          user: store.getState().user
        })
      },
      1000
    )
  )

  return store
}

export default configureStore
