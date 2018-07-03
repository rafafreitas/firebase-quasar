import Login from '../views/Pages/login'
import Dashboard from '../views/Dashboard/dashboard'
import Default from '../layouts/default'
import page404 from '../views/Pages/404'
import page403 from '../views/Pages/forbidden'

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
        component: Dashboard,
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
