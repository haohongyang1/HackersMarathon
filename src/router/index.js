import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import list from '@/components/list'
import detail from '@/components/detail'
import teacherList from '@/components/teacherList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: 'list',
        name: 'list',
        component: list
      }, {
        path: 'detail',
        name: 'detail',
        component: detail
      }, {
        path: 'teacherList',
        name: 'teacherList',
        component: teacherList
      }]
    }
  ]
})
