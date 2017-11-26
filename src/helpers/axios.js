const fakeApi = {
  loginSignup: {
    email: 'user@test.cc',
    firstName: 'first',
    id: 1,
    lastName: 'last',
    token: 'eyJhbGciOiJIUzI1NiJ9',
    username: 'usertest'
  }
}

const methods = ['get', 'post', 'put', 'patch', 'del']

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

class Axios {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, body } = {}) => {
        return delay(500).then(() => {
          console.log(this.token)
          switch (method + path) {
            case 'post/user/login':
              // throw new Error ('That username is taken')
              return fakeApi.loginSignup
            case 'get/user':
              return fakeApi.user
            default:
              throw new Error(
                `Unknown endpoint: ${method}: ${path}`
              )
          }
        })
      }
    )
  }
  setToken(token) {
    this.token = token
  }
}

const axios = new Axios()

export default axios
