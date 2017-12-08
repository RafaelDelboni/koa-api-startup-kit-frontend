import { reducer as formReducer } from 'redux-form'
import login from './login'
import account from './account'

export default formReducer.plugin({
  login,
  account
})
