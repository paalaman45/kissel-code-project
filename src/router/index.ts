import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { useAuth } from '@/composables/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/AdminLoginView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
      meta: {
        title: 'Portfolio - My Work',
        description: 'Explore my complete portfolio of web development projects including e-commerce platforms, custom applications, and responsive websites.'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'Blog - Web Development Insights',
        description: 'Read my latest blog posts about web development, Vue.js, modern technologies, and industry best practices.'
      }
    },
  ],
})

// Navigation guard for protected routes (simplified for demo)
router.beforeEach((to, from, next) => {
  // For demo purposes, we'll allow access to admin without proper auth
  // In production, you would check authentication status
  next()
})

export default router
