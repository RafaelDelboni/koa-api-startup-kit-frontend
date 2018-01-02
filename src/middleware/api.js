import api from '../helpers/api.fake'
//import api from '../helpers/api'

export default store => next => action => {
  if (typeof action === 'function') {
    return next(action)
  }

  const { promise, types, ...rest } = action
  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  next({...rest, type: REQUEST})

  const actionPromise = promise(api)

  actionPromise.then(
    (result) => {
      result = result.data || result
      next({...rest, result, type: SUCCESS})
      if (typeof action.onSuccess === 'function') {
        action.onSuccess(next, result)
      }
    },
    (error) => {
      if(error.response && error.response.data) {
        error.message = error.response.data
      }
      next({...rest, error, type: FAILURE})
      if (typeof action.onFailure === 'function') {
        action.onFailure(next, error)
      }
    }
  ).catch((error)=> {
    console.error('MIDDLEWARE ERROR:', error)
    next({...rest, error, type: FAILURE})
  })

  return actionPromise
}
