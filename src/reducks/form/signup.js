import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL } from '../user'

export default (state, action) => {
  switch(action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        submitting: true,
        submitSucceeded: false
      } 
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitSucceeded: true
      } 
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: action.error.message,
        submitErrors: action.error.message,
        submitting: false,
        submitSucceeded: false
      }
    default:
      return state
  }
}
