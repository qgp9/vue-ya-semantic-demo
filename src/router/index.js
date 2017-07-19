import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Elements from '@/components/Elements'
import Modal from '@/components/Modal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/elements',
      name: 'Elements',
      component: Elements
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }
  ]
})
