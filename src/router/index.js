import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/Login') },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: 'users',
        component: () => import('@/views/Users'),
        name: '用户列表'
      },
      {
        path: 'roles',
        component: () => import('@/views/Roles')
      },
      {
        path: 'rights',
        component: () => import('@/views/Rights')
      },
      {
        path: 'goods',
        component: () => import('@/views/Goods'),
        children: [
          {
            path: 'add',
            component: () => import('@/views/Goods/add')
          }
        ]

      },
      {
        path: 'params',
        component: () => import('@/views/Params')
      },
      {
        path: 'categories',
        component: () => import('@/views/Categories')
      },
      {
        path: 'orders',
        component: () => import('@/views/Orders')
      },
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('@/views/Welcome')
      }

    ]

  }

]

const router = new VueRouter({
  routes
})

export default router
