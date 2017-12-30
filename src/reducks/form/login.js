import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../auth'

export default (state, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
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
    case LOGIN_FAILURE:
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
