import Container from '../layouts/Container';
import {routes as pages} from '../../pages'

export default [
  {
    name: 'Home',
    path: '/',
    component: Container,
    children: [
      ...pages
    ]
  },
]
