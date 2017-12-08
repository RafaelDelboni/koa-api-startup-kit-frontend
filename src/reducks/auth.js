import * as userActions from './user'

export const LOGIN = 'auth/LOGIN'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'auth/LOGIN_FAIL'
export const LOGOUT = 'auth/LOGOUT'

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

export function logout(id) {
  return { type: LOGOUT }
}
