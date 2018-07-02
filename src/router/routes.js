import Login from '../pages/login'
import Index from '../pages/index'
import Default from '../layouts/default'

export default [
  {
    path: '/',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/home',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      auth: false,
      userType: null
    }
  },
  {
    name: 'Home',
    path: '/',
    component: Default,
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: Index,
        meta: {
          auth: true,
          userType: null
        }
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
