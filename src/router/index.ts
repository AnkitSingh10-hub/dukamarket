import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import { useJwtStore } from '@/stores/jwt'

const authenticatedRoutes: string[] = [
  'Profile',
  'TicketHistory',
  'TTCoins',
  'TransactionHistory',
  'PaymentSuccess',
  'PaymentError',
  'FlightDetail',
  'CheckAvailability',
  'Change-Password'
]

const router = createRouter({
  scrollBehavior(_, __, ___) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Pages/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Pages/LoginView.vue')
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('@/views/Pages/WishlistView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/Pages/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('@/views/Pages/CheckoutView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Pages/ContactView.vue')
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import('@/views/Pages/FaqView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/views/Pages/AccountView.vue')
    },
    {
      path: '/ordertracking',
      name: 'OrderTracking',
      component: () => import('@/views/Pages/OrderTracking.vue')
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: () => import('@/views/Pages/ProductListView.vue')
    },
    {
      path: '/productdetail',
      name: 'ProductDetail',
      component: () => import('@/views/Pages/ProductDetailView.vue')
    },
    {
      path: '/thankyou',
      name: 'ThankYou',
      component: () => import('@/views/Pages/ThankYou.vue')
    },
    {
      name: 'notfound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    },
    
  ]
})

export default router

export async function WaitUntilRefreshed(): Promise<void> {
  const JwtStore = useJwtStore()
  while (JwtStore.RefreshingToken) {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}

router.beforeEach(
  async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    const JwtStore = useJwtStore()

    if (to.name == 'Login' || to.name == 'Register') {
      await WaitUntilRefreshed()
      if (JwtStore.loggedIn) {
        next({ name: 'Home' })
      } else {
        next()
      }
    } else if (authenticatedRoutes.includes(to.name)) {
      await WaitUntilRefreshed()
      if (JwtStore.loggedIn) {
        next()
      } else {
        next({ name: 'NotFound' })
      }
    } else {
      next()
    }
  }
)
