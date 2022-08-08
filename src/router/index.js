import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import SignUpCheck from '../views/SignUpCheck.vue'
import Profile from '../views/Profile.vue'
import Product from '../views/Product.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
  
    {
      path: '/login',
      name: 'login',
      component: Login,
     
    },
  
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
  
    {
      path: '/signUpCheck',
      name: 'SignUpCheck',
      component: SignUpCheck
    },
  
  
    {
      path: '/profile/',
      name: 'profile',
      component: Profile
    },
  
    {
      path: '/product',
      name: 'product',
      component: Product
    },
  
  ]
})

