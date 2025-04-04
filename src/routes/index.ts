import { createRouter, createWebHistory } from 'vue-router';
import Operadoras from '../components/OperatorsList.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/operators', name: 'Operadoras', component: Operadoras }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;