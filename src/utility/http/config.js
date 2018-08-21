export default {
  method: 'post',

  baseURL: process.env.NODE_ENV === 'development' ?
    'http://localhost:8080/' :
    'http://localhost:8080/',

  headers: {},

  data: {},

  timeout: 10000,

  withCredentials: false,

  responseType: 'json'
}
