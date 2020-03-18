import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home.vue')
const Category = ()=> import('../views/category/Category.vue')
const Cart = ()=> import('../views/cart/Cart.vue')
const Profile = ()=> import('../views/profile/Profile.vue')
const Sign = ()=> import('../views/profile/childComps/Sign.vue')
const Register = ()=> import('../views/profile/childComps/Register.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/sign',
    component: Sign
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
