import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../views/Profile'
import Dashboard from '../views/Dashboard'
import page404 from '../views/Page404'
import Alert from '../views/Alert'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import DefaultContainer from '../containers/DefaultContainer'
import ComponentPlayground from '../views/ComponentPlayground'
import Buttons from '../views/buttons/Buttons'
import ButtonsGroup from '../views/buttons/ButtonGroups'
import Dropdown from '../views/buttons/Dropdown'
import Form from '../views/Form'
import Table from '../views/Table'
import Tabs from '../views/Tabs'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      redirect: 'chart',
      component: DefaultContainer,
      children: [
        {
          path: 'chart',
          name: 'Chart',
          component: Dashboard
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'alert',
          name: 'Alert',
          component: Alert
        },
        {
          path: 'playground',
          name: 'Component Playground',
          component: ComponentPlayground
        },
        {
          path: 'buttons',
          name: 'Buttons',
          component: Buttons
        },
        {
          path: 'buttons-group',
          name: 'Button Group',
          component: ButtonsGroup
        },
        {
          path: 'buttons-dropdown',
          name: 'Dropdown',
          component: Dropdown
        },
        {
          path: 'table',
          name: 'Table',
          component: Table
        },
        {
          path: 'form',
          name: 'Form',
          component: Form
        },
        {
          path: 'tabs',
          name: 'Tabs',
          component: Tabs
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
