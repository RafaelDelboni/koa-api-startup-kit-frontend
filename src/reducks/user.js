export const FETCH_USER = 'user/LOGIN'
export const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS'
export const FETCH_USER_FAIL = 'user/FETCH_USER_FAIL'

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
        isFetchin: false,
        user: action.result
      }
    case FETCH_USER_FAIL:
      return {
        ...state,
        isFetchin: false,
        user: null,
        loginError: action.error
      }
    default:
      return state
  }
}

export function fetch(values) {
  return {
    types: [FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL],
    promise: (client) => client.post('/user', {
      body: {
        username: values.username,
        password: values.password
      }
    })
  }
}
