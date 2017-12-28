import {email, username} from '../validations'

export default values => {
  return {
    email: email(values),
    username: username(values)
  }
}
