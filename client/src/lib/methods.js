import { storeToken } from '../utils/handleToken'
import local from '../api/local'

const methods = {

  createUser: async (values, callback) => {
    const response = await local.post(`/user/new`, values)
    const data = response.data
    if (!data.success) {
      callback(data.message)
    } else if (data.token) {
      callback(null, { token: data.token })
      storeToken(data.token)
    }
  },

  login: async (credentials, callback) => {
    const response = await local.post(`/user/login`, credentials)
    const data = response.data
    if (!data.success) {
      callback(data.message)
    } else if (data.token) {
      callback(null, { token: data.token })
      storeToken(data.token)
    }
  },

  logout: async (token, callback) => {
    const response = await local.get(`/user/logout?token=${token}`)
    const data = response.data
    if (!data.success) {
      callback(data.message)
    } else {
      callback(null, { token: '', user: {} })
    }
  },

  verifyToken: async (token, callback) => {
    const response = await local.get(`/user/verify?token=${token}`)
    const data = response.data
    const result = data.success ? token : null
    callback(result)
  },

  getUser: async (token, callback) => {
    const response = await local.get(`/user?token=${token}`)
    const data = response.data
    console.log(data)
    if (!data.success) {
      callback(data.message)
    } else {
      callback(null, data)
    }
  }
}

export default methods
