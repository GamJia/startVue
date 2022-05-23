import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Member from '../views/Member.vue'
import ProductCreate from '../components/ProductCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },

  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: ForgotPassword
  },

  {
    path: '/member',
    name: 'member',
    component: Member
  },

  {
    path: '/productCreate',
    name: 'productCreate',
    component: ProductCreate
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
