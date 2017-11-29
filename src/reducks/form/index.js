import { reducer as formReducer } from 'redux-form'
import loginForm from './login'

export default formReducer.plugin({
  login:  loginForm
})
