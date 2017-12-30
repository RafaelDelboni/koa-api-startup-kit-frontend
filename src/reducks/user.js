export const FETCH_USER_REQUEST = 'user/FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'user/FETCH_USER_FAILURE'
export const SAVE_USER_REQUEST = 'user/SAVE_USER_REQUEST'
export const SAVE_USER_SUCCESS = 'user/SAVE_USER_SUCCESS'
export const SAVE_USER_FAILURE = 'user/SAVE_USER_FAILURE'
export const CLEAR_USER = 'user/CLEAR_USER'

const initialState = {}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
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
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        userError: action.error
      }
    case SAVE_USER_REQUEST:
      return {
        ...state,
        isSaving: true
      }
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        isSaving: false,
        ...action.result
      }
    case SAVE_USER_FAILURE:
      return {
        ...state,
        isSaving: false,
        userError: action.error
      }
    case CLEAR_USER:
      return initialState 
    default:
      return state
  }
}

export function clearStateUser() {
  return {
    type: CLEAR_USER
  }
}

export function updateStateUser(user) {
  return {
    type: FETCH_USER_SUCCESS,
    result: user
  }
}

export function fetchUser(values) {
  return {
    types: [FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
    promise: (client) => client.get('/user')
  }
}

export function saveUser(values) {
  return {
    types: [SAVE_USER_REQUEST, SAVE_USER_SUCCESS, SAVE_USER_FAILURE],
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
