import { createRouter, createWebHistory } from 'vue-router'
import OperatorsList from '../pages/OperatorsList.vue'

const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/operadoras', name: 'Operadoras', component: OperatorsList }
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
