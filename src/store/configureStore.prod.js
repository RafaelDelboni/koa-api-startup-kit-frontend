import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { saveState } from '../helpers/localStorage'
import api from '../middleware/api'
import rootReducer from '../reducks'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk,
      api,
      loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
      })
    )
  )

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
