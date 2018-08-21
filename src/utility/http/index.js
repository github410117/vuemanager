import Apiinterface from './interface'

const install = Vue => {
  if (install.installed) {return}
  install.installed = true

  Object.defineProperties(Vue.prototype,{
    $api:{
      get() {
        return Apiinterface
      }
    }
  })
}

export default install
