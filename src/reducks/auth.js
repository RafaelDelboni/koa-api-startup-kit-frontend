import * as userActions from './user'

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
export const LOGOUT = 'auth/LOGOUT'
export const SIGNUP_USER_REQUEST = 'user/SIGNUP_USER_REQUEST'
export const SIGNUP_USER_SUCCESS = 'user/SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'user/SIGNUP_USER_FAILURE'

const initialState = {}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        islogging: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        token: action.result.token
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
        loginError: action.error
      }
    case LOGOUT:
      return initialState
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        isSignuping: true
      }
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isSignuping: false,
        token: action.result.token
      }
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        isSignuping: false,
        signupError: action.error
      }
    default:
      return state
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded
}

export function login(values) {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    promise: (client) => client.post('/user/login', {
      body: {
        username: values.username,
        password: values.password
      }
    }),
    onSuccess: (dispatch, result) => {
      dispatch(userActions.updateStateUser(result.user))
    }
  }
}

export function signupUser(values) {
  return {
    types: [SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE],
    promise: (client) => client.post('/user/signup', {
      body: {
        email: values.email,
        username: values.username,
        password: values.password,
        passwordConfirm: values.passwordConfirm
      }
    }),
    onSuccess: (dispatch, result) => {
      dispatch(userActions.updateStateUser(result.user))
    }
  }
}

export function logout(dispatch) {
  dispatch({type: LOGOUT})
  dispatch(userActions.clearStateUser())
}
