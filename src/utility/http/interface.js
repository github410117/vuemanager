import axios from './api'
import apilist from '../../config/apilist'

const userLogin = data => {
  return axios({
    url:apilist.login,
    method:'post',
    data
  })
}

export default {
  userLogin
}

