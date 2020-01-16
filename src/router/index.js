import Vue from 'vue'
import VueRouter from 'vue-router'

import page404 from '../components/Page404'
import Dashboard from '../views/Dashboard'
import Profile from '../views/Profile'
import DefaultContainer from '../containers/DefaultContainer'
import ComponentPlayground from '../views/ComponentPlayground'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'playground',
          name: 'Component Playground',
          component: ComponentPlayground
        }
      ]
    },
    {
      path: '*',
      name: 'Page 404',
      component: page404
    }
  ]
})

// router.beforeEach((to, from, next) => {
// })

export default router
