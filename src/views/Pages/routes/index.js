import Dashboard from '../layouts/Dashboard';
import Profile from '../layouts/Profile';
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
    name: 'Profile',
    path: 'Profile',
    component: Profile,
    meta: {
      auth: true,
      userType: null
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
