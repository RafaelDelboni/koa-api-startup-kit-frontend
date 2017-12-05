export const FETCH_USER = 'user/FETCH_USER'
export const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS'
export const FETCH_USER_FAIL = 'user/FETCH_USER_FAIL'
export const SAVE_USER = 'user/SAVE_USER'
export const SAVE_USER_SUCCESS = 'user/SAVE_USER_SUCCESS'
export const SAVE_USER_FAIL = 'user/SAVE_USER_FAIL'

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.result
      }
    case FETCH_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        userError: action.error
      }
    case SAVE_USER:
      return {
        ...state,
        isFetching: true
      }
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.result
      }
    case SAVE_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        userError: action.error
      }
    default:
      return state
  }
}

export function fetchUser(values) {
  return {
    types: [FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL],
    promise: (client) => client.get('/user')
  }
}

export function saveUser(values) {
  return {
    types: [SAVE_USER, SAVE_USER_SUCCESS, SAVE_USER_FAIL],
    promise: (client) => client.put('/user', {
      body: {
        email: values.email,
        username: values.username,
        firstName: values.firstName,
        lastName: values.lastName
      }
    })
  }
}
