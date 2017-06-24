import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://127.0.0.1:9006/employee/v2'
axios.defaults.headers.common['X-Access-Token'] = '1'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
