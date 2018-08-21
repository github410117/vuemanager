import {
  SET_USER_INFO, SET_USER_TOKEN
} from "./mutation-types";

import {
  cacheUserInfo,
  cacheToken
} from "./cacheonst";

import localstore from 'store'

export default {
  //保存用户信息
  [SET_USER_INFO](state, userInfo) {
    userInfo ? localstore.set(cacheUserInfo, userInfo) : localstore.remove(cacheUserInfo)
    state.user.userInfo = userInfo
  },

  //保存token
  [SET_USER_TOKEN](state,token) {
    token ? localstore.set(cacheToken, token) : localstore.remove(cacheToken)
    state.user.token = token
  }

}
