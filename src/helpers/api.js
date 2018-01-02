import get from 'lodash/get'
import {loadState} from './localStorage'
import axios from 'axios'

const api = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // Create instance
  let instance = axios.create(defaultOptions)

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const state = loadState()
    const token = get(state, 'auth.token')
    config.headers.Authorization =  token ? `Bearer ${token}` : ''
    return config
  })

  return instance
}

export default api()
