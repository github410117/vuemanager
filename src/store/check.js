import localstore from 'store'
import {
  cacheUserInfo,
  cacheToken
} from "./cacheonst";


export default store => {
  const userInfo = localstore.get(cacheUserInfo)
  if (userInfo) {
    store.dispatch('userLogin', userInfo)
  };

  const token = localstore.get(cacheToken)
  if (token) {
    store.dispatch('userToken',token)
  }
}
