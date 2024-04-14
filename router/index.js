import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import UserAuth from '../views/UserAuth.vue';
import SignUp from '../views/SignUp.vue';
import store from '../store';


const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/auth', name: 'UserAuth', component: UserAuth },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: () => import('../views/AdminPanel.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAdmin) {
        next();
      } else {
        next('/login');
      }
    }
  },
 
  { path: '/signup', name: 'SignUp', component: SignUp }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
