import get from 'lodash/get'
import axios from '../helpers/axios'

export const LOGIN = 'auth/LOGIN'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'auth/LOGIN_FAIL'
export const LOGOUT = 'auth/LOGOUT'

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      axios.setToken(get(action.result, 'token'))
      return {
        ...state,
        loggingIn: false,
        user: action.result
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      }
    case LOGOUT:
      axios.setToken(null)
      return {
        ...state,
        user: null
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
    })
  }
}

export function logout(id) {
  return { type: LOGOUT }
}
