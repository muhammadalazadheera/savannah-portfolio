import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BioView from '@/views/BioView.vue'
import ContactView from '@/views/ContactView.vue'
import LibraryView from '@/views/LibraryView.vue'
import BlogView from '@/views/BlogView.vue'
import SingleBlog from '@/views/SingleBlog.vue'
import AdminRoutes from './admin'
import FrontBase from '@/views/FrontBase.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontBase,
      children: [
        {
          path: '',
          component: HomeView
        },
        {
          path: '/bio',
          component: BioView
        },
        {
          path: '/contact',
          component: ContactView
        },
        {
          path: '/library',
          name: 'LibraryView',
          component: LibraryView
        },
        {
          path: '/blog',
          name: BlogView,
          component: BlogView
        },
        {
          path: '/singleblog/:id',
          component: SingleBlog,
          name: 'SingleBlog'
        }
      ]
    },
    ...AdminRoutes
  ]
})

router.beforeEach(async (to, from) => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if ( user && to.name == 'Login' ) {
      router.push('admin/blogs')
    }
    if( !user && (to.name == 'Blogs' || to.name == 'Books' || to.name == 'NewBook' || to.name == 'EditBook' || to.name == 'NewBlog' || to.name == 'EditBlog' ) ) {
      router.push('/login')
    }
    unsub()
  })
})

export default router
