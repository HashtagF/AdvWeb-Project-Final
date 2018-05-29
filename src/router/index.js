import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import ShowNews from '@/components/ShowNews'
import Dashboard from '@/components/Dashboard'
import UpdateNews from '@/components/editPost'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    },
    {
      path: '/ShowNews/:id',
      name: 'ShowNews',
      component: ShowNews
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/UpdateNews/:id',
      name: 'UpdateNews',
      component: UpdateNews
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
