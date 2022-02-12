import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import protectedRoute from '../middlewares/protected'
import Home from '../views/Home.vue'
import PageTwo from '../views/pageTwo.vue'
import ListCustomer from '@/components/customer/List.vue'
import CreateCustomer from '@/components/customer/Create.vue'
import EditCustomer from '@/components/customer/Edit.vue'
import ShowCustomer from '@/components/customer/Show.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pagetwo',
    name: 'PageTwo',
    component: PageTwo,
    beforeEnter: protectedRoute
  },
  {
    path: '/customer',
    name: 'List',
    component: ListCustomer
  },
  {
    path: '/customer/create',
    name: 'Create',
    component: CreateCustomer
  },
  {
    path: '/customer/:id/edit',
    name: 'Edit',
    component: EditCustomer
  },
  {
    path: '/customer/:id',
    name: 'Show',
    component: ShowCustomer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
