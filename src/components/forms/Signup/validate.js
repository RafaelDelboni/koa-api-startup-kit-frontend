import {email, username, password, passwordConfirm} from '../validations'

export default values => {
  return {
    email: email(values),
    username: username(values),
    password: password(values),
    passwordConfirm: passwordConfirm(values)
  }
}
