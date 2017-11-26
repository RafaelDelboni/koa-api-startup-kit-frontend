import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { saveState } from '../helpers/localStorage'
import api from '../middleware/api'
import rootReducer from '../reducks'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  )

  store.subscribe(
    throttle(
      () => {
        saveState({
          auth: store.getState().auth,
        })
      },
      1000
    )
  )

  return store
}

export default configureStore
