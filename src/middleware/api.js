import axios from '../helpers/axios'

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

  const actionPromise = promise(axios)

  actionPromise.then(
    (result) => {
      next({...rest, result, type: SUCCESS})
      if (typeof action.onSuccess === 'function') {
        action.onSuccess(next, result)
      }
    },
    (error) => {
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
