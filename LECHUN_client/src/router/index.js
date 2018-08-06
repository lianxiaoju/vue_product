import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
import Wode from '@/view/info'
import User from '@/view/user'
import Login from '@/view/login'
import Detail from '@/view/home/detail'
import Register from '@/view/Register'
import AddressDetail from '@/view/user/address'
import AddDetail from '@/view/user/address/AddDetail'
import Currency from '@/view/home/currency/'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/addressDetail',
      name: 'AddressDetail',
      component: AddressDetail,
      meta: {
        title: '添加收货地址'
      },
      // children: [
      //   { path: '/detail', component: AddDetail },
      // ]
      // addressDetail
    },
    {
      path: '/addressDetail/detail',
      name: 'AddDetail',
      component: AddDetail,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '产品详情页'
      }
    },
    {
      path: '/currency',
      name: 'Currency',
      component: Currency,
      meta: {
        title: '订单支付页'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册页'
      }
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode,
      meta: {
        title: '个人中心'
      },
      // beforeEnter: (to, from, next) => {
      //   if (!window.localStorage.getItem('user')) {
      //     next('/login')
      //   } else {
      //     next()
      //   }
      // }
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }

    }
  ]
})

const decludeRouter = ['Home', 'Login', 'Detail', 'Register'];
router.beforeEach((to, from, next) => {
  console.log(to.name)
  if (decludeRouter.indexOf(to.name) !== -1) {
    next()
    return;
  }
  if (document.cookie.indexOf('yanzheng') === -1) {
    next('/login')
  } else {
    next()
  }




  // if (!window.localStorage.getItem('user')) {
  //   next('/login')
  // } else {
  //   next()
  // }
})


// const decludeRouter = ['Home', 'Login'];
// router.beforeEnter((to, from, next) => {
//   if (decludeRouter.indexOf(to.name) !== -1) {
//     next()
//     return;
//   }

//   if (!window.localStorage.getItem('user')) {
//     next('/login')
//   } else {
//     next()
//   }

// })

// router.afterEach((to, from) => {
//   document.title = to.meta.title
// })


export default router