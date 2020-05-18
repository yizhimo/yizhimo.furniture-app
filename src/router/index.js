import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home.vue')

const Category = ()=> import('../views/category/Category.vue')
const Space = ()=> import('../views/category/childComps/Space.vue')
const Style = ()=> import('../views/category/childComps/Style.vue')
const Classify = ()=> import('../views/category/childComps/Classify.vue')
const NextCategory = ()=> import('../views/nextCategory/nextCategory.vue')

const Cart = ()=> import('../views/cart/Cart.vue')

const Profile = ()=> import('../views/profile/Profile.vue')
const Sign = ()=> import('../views/profile/childComps/Sign.vue')
const Register = ()=> import('../views/profile/childComps/Register.vue')

const Detail = ()=> import('../views/detail/Detail.vue')
const CateDetail = ()=> import('../views/cateDetail/CateDetail.vue')

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
    component: Category,
    children:[
      {
        path: '',
        redirect: 'space'
      },
      {
        path: 'space',
        component: Space,
      },
      {
        path: 'style',
        component: Style
      },
      {
        path: 'classify',
        component: Classify
      }
    ]
  },
  {
    path: '/nextCategory:value',
    component: NextCategory
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
  },
  {
    // path: '/detail/:iid',
    path: '/detail',
    component: Detail
  },
  {
    // path: '/detail/:iid',
    path: '/cateDetail:id',
    component: CateDetail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
