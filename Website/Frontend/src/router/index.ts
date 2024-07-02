import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '', name: 'about', component: () => import('../components/AboutMe.vue')
        },
        {
          path: 'projects', name: 'projects', component: () => import('../components/MyProjects.vue')
        },
        {
          path: 'blog', name: 'blog', component: () => import('../components/MyBlog.vue')
        }
      ]
    },
  ]
})

export default router
