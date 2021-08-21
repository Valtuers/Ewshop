import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import('@/views/home/Home');
const Category = () => import('@/views/category/Category');
const Shopcart = () => import('@/views/shopcart/Shopcart');
const Profile = () => import('@/views/profile/Profile');

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/home',
    name: '/Home',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/category',
    name: '/Category',
    component: Category,
    meta: {
      title: '图书商城--分类'
    }
  },
  {
    path: '/shopcart',
    name: '/Shopcart',
    component: Shopcart,
    meta: {
      title: '图书商城--购物车'
    }
  },
  {
    path: '/profile',
    name: '/Profile',
    component: Profile,
    meta: {
      title: '图书商城--个人中心'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  next();
  document.title = to.meta.title;
})
export default router
