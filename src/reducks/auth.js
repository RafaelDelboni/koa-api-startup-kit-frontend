import * as userActions from './user'

export const LOGIN = 'auth/LOGIN'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'auth/LOGIN_FAIL'
export const LOGOUT = 'auth/LOGOUT'
export const SIGNUP_USER = 'user/SIGNUP_USER'
export const SIGNUP_USER_SUCCESS = 'user/SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAIL = 'user/SIGNUP_USER_FAIL'

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
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
    case LOGIN_FAIL:
      return {
        ...state,
        isLogging: false,
        loginError: action.error
      }
    case LOGOUT:
      return {}
    case SIGNUP_USER:
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
    case SIGNUP_USER_FAIL:
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
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
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
    types: [SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL],
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
export function logout() {
  userActions.updateStateUser({})
  return { type: LOGOUT }
}
