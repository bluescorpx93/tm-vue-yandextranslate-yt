import Vue from 'vue'
import Router from 'vue-router'
import TranslatorComponent from '@/components/TranslatorComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TranslatorComponent',
      component: TranslatorComponent
    }
  ]
})
