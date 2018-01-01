import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from '../auth'

export default (state, action) => {
  switch(action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: true,
        submitSucceeded: false
      } 
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitSucceeded: true
      } 
    case RESET_PASSWORD_FAILURE:
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
