import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import form from './form'

export default combineReducers({
  auth,
  user,
  form
})
