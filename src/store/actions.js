import {
  SET_USER_INFO,
  SET_USER_TOKEN
} from "./mutation-types";

const userLogin = ({commit},userInfo) => {
  commit(SET_USER_INFO,userInfo)
}

const userToken = ({commit},token) => {
  commit(SET_USER_TOKEN,token)
}



export {
  userLogin,
  userToken
}
