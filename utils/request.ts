import config from './config'
import axios from 'axios'
const msgERRor = {}
const instance = axios.create({
  baseURL: '',
  timeout: 4000
})
instance.interceptors.request.use(req => {
  if ('token') {
    instance.defaults.headers.common['Authorization'] = 'token'
  }
  return req
})
instance.interceptors.response.use(res => {
  const { code, data, msg } = res.data
  switch (code) {
    case 200:
      return data
    case 400:
  }
})

const request = options => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  let flag = options.mock
  if (config.env === 'production') {
    instance.defaults.baseURL = config.baseURL
  } else {
    instance.defaults.baseURL =
      config.mock || flag ? config.mockUrl : config.baseURL
  }
  return instance(options)
}
export default request
