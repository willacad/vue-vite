import { createRouter, createWebHistory } from 'vue-router';

import Home from "./views/Home.vue";
import LoginRequester from "./views/LoginRequester.vue";
import NewUser from "./views/NewUser.vue"
import Question from "./views/OptionPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/LoginRequester',
    name: 'loginRequester',
    component: LoginRequester,
  },
  {
    path: '/NewUser',
    name: 'newuser',
    component: NewUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes

});

export default router;