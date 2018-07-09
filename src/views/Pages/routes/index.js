import Dashboard from '../layouts/Dashboard';
import Page403 from '../layouts/Forbidden';

export default [
  {
    name: 'Dashboard',
    path: 'Dashboard',
    component: Dashboard,
    meta: {
      auth: true,
      userType: 1
    }
  },
  {
    name: 'Forbidden',
    path: 'forbidden',
    component: Page403,
    meta: {
      auth: true,
      userType: null
    }
  }
]
