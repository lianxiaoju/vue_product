import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Detail from '@/views/detail'
import Mine from '@/views/mine'
import Login from '@/views/login'
import Settlement from '@/views/settlement'
import cookie from '@/utils/cookie'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: Settlement
    }
  ]
})
router.beforeEach((to, from, next) => {
   console.log('to'+to.name)
   console.log('from'+from.name)
  const arr = ['mine', 'detail'];
  if (arr.indexOf(to.name) !== -1) {
    if (cookie.get('token')) {
      next();
    } else {
      next({
        name: 'login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next();
  }
})
export default router;
