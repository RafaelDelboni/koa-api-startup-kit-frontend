import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import form from './form'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  loadingBar: loadingBarReducer,
  auth,
  user,
  form
})
