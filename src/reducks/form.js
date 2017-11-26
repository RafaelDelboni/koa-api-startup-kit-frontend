import { reducer as formReducer } from 'redux-form'
import loginForm from './form/login'

export default formReducer.plugin({
  login:  loginForm
})
