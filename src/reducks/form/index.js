import { reducer as formReducer } from 'redux-form'
import login from './login'
import account from './account'
import signup from './signup'
import forgotPassword from './forgotPassword'
import resetPassword from './resetPassword'

export default formReducer.plugin({
  login,
  account,
  signup,
  forgotPassword,
  resetPassword
})
