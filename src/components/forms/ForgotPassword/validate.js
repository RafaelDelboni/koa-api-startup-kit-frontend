import {email} from '../validations'

export default values => {
  return {
    email: email(values)
  }
}
