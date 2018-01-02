let user = {
  id: 1,
  email: 'user@test.cc',
  firstName: 'first',
  lastName: 'last',
  username: 'user'
}

const login = {
  username: user.username,
  password: '12341234'
}

const token = 'eyJhbGciOiJIUzI1NiJ9'

const loginSignup = {
  user,
  token
}

const methods = ['get', 'post', 'put', 'patch', 'del']

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

class Axios {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, body = {}) => {
        return delay(500).then(() => {
          switch (method + path) {
            case 'post/user/login':
              if (body.username !== login.username 
                || body.password !== login.password
              ) {
                throw new Error ('That username or password is wrong.')
              }
              return { data: loginSignup }
            case 'get/user':
              return { data: user }
            case 'post/user/signup':
              return {
                data: {
                  user: {
                    id: 2,
                    email: body.email,
                    username: body.username,
                    password: body.password,
                    passwordConfirm: body.passwordConfirm
                  },
                  token
                }
              }
            case 'put/user':
              return {
                data: {
                  ...user,
                  ...body
                }
              }
            case 'put/user/forgot':
              if (body.email !== user.email) {
                throw new Error ('Email not found.')
              }
              return { data: body }
            case 'put/user/reset':
              if (body.email !== user.email || body.token !== '123') {
                throw new Error ('Password reset link is invalid or expired.')
              }
              return { data: {status: 'ok' } }
            default:
              throw new Error(
                `Unknown endpoint: ${method}: ${path}`
              )
          }
        })
      }
    )
  }
}

const axios = new Axios()

export default axios
