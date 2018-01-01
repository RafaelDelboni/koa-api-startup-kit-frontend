import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE
} from '../auth'

export default (state, action) => {
  switch(action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: true,
        submitSucceeded: false
      } 
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitSucceeded: true
      }
    case FORGOT_PASSWORD_FAILURE:
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
