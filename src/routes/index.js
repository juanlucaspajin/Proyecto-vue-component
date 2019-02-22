import Vue from 'vue'
import Router from 'vue-router'
import ContentDelete from '../components/content-delete/ContentDelete.vue'
import Home from '../components/home/Home.vue'
import ContentAdding from '../components/content-adding/ContentAdding.vue'
import ContentView from '../components/content-view/ContentView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/delete',
      name: 'Delete',
      component: ContentDelete
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/adding',
        name: 'Adding',
        component: ContentAdding
    }
    ,
    {
        path: '/view',
        name: 'View',
        component: ContentView
    }
  ]
})