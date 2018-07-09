import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes'
import Firebase from '../helpers/firebase'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})


Router.beforeEach((to, from, next) => {
  console.log('Check Routers')
  let requiresAuth = to.meta.auth
  // let currentUser = Firebase.auth().currentUser;

  Firebase.auth().onAuthStateChanged(function(user) {
    if (requiresAuth && user) {
      console.log('Authorized route')
      next()

    } else if (requiresAuth && !user) {
      console.log('Unauthorized route')
      next({path: '/login'})

    }else {
      console.log('Authorized route')
      next()
    }
  });

})

export default Router
