import Login from '../layouts/Login';
import Page404 from '../layouts/404';

export default [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      auth: false,
      userType: null
    }
  },
  { // Always leave this as last one
    path: '*',
    component: Page404
  }
]
