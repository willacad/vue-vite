import { createRouter, createWebHistory } from 'vue-router';

import Home from "./views/Home.vue";
import LoginRequester from "./views/LoginRequester.vue";
import NewCompany from "./views/NewCompany.vue"
import OptionPage from "./views/OptionPage.vue"
import NewAdm from "./views/NewAdm.vue"
import DemandView from "./views/DemandView.vue"

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
    path: '/NewCompany',
    name: 'newcompany',
    component: NewCompany,
  },

  {
    path: '/OptionPage',
    name: 'optionpage',
    component: OptionPage,
  },

  {
    path: '/NewAdm',
    name: 'newadm',
    component: NewAdm,
  },

  {
    path: '/DemandView',
    name: 'demandview',
    component: DemandView,
  },



];

const router = createRouter({
  history: createWebHistory(),
  routes

});

export default router;