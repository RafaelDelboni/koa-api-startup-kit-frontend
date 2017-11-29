const user = {
  id: 1,
  email: 'user@test.cc',
  firstName: 'first',
  lastName: 'last',
  username: 'user'
}

const login = {
  username: user.username,
  password: '1234'
}

const token = 'eyJhbGciOiJIUzI1NiJ9'

const fakeApi = {
  loginSignup: {
    ...user,
    token
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
              if (body.username !== login.username 
                || body.password !== login.password
              ) {
                throw new Error ('That username or password is wrong.')
              }
              return fakeApi.loginSignup
            case 'get/user':
              return fakeApi.user
            case 'put/user':
              return fakeApi.user = {
                ...fakeApi.user,
                body
              }
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
