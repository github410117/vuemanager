import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '../store'

const pageLogin = resolve => require(["%/login/Login"], resolve)
const pageHome = resolve => require(["%/Home/Home"], resolve)
const pageChangePwd = resolve => require(["%/setting/changepwd"], resolve)
const pageUserList = resolve => require(["%/DataManage/UserList/UserList"], resolve)


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home'
    },
    {
      path: '/login',
      component: pageLogin
    },
    {
      path: '/home',
      component: pageHome,
      name:'home',
      children:[
        {
          path:'/changepwd',
          component:pageChangePwd,
          meta:['设置','修改密码']
        },
        {
          path:'/userlist',
          component:pageUserList,
          meta:['数据管理','用户列表']
        }
      ]
    }
  ]
})

//添加路由守卫
router.beforeEach((to, from, next) => {

  if (store.state.user.token) {
    if (to.path === '/login') {
      next({path:'/'})
    } else {
      next()
    }

  } else {
    if (to.path !== '/login') return next('/login');
    next()
  }
})

export default router;
