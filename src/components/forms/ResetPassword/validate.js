import {password, passwordConfirm} from '../validations'

export default values => {
  return {
    password: password(values),
    passwordConfirm: passwordConfirm(values)
  }
}
