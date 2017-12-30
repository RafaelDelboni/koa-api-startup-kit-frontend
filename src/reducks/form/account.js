import { SAVE_USER_REQUEST, SAVE_USER_SUCCESS, SAVE_USER_FAILURE } from '../user'

export default (state, action) => {
  switch(action.type) {
    case SAVE_USER_REQUEST:
      return {
        ...state,
        submitting: true,
        submitSucceeded: false
      } 
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitSucceeded: true
      } 
    case SAVE_USER_FAILURE:
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
