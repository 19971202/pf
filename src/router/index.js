import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUP from '../views/SignUp.vue'
import ShareHome from '../views/ShareHome.vue'
import Detail from '../views/Detail.vue'
import Profile from '../views/Profile.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUP
  },
  {
    path: '/sharehome',
    name: 'sharehome',
    component: ShareHome,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
    meta: {
      requiresAuth: true,
    },
    props: true
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router
