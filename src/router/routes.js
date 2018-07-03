import Login from '../views/login'
import Index from '../views/index'
import Default from '../layouts/default'
import page404 from '../views/pages/404'
import page403 from '../views/pages/forbidden'

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
      },
      {
        name: 'Forbidden',
        path: 'forbidden',
        component: page403,
        meta: {
          auth: true,
          userType: null
        }
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: page404
  }
]
