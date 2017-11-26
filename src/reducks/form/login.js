import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../auth'

export default (state, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        submitting: true,
        submitSucceeded: false
      } 
    case LOGIN_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitSucceeded: true
      } 
    case LOGIN_FAIL:
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
