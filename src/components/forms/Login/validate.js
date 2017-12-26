import {username, password} from '../validations'

export default values => {
  return {
    username: username(values),
    password: password(values)
  }
}
