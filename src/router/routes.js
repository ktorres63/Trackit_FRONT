const routes = [
  {
    path: '/',
    component: () => import('pages/LandingPage.vue'),
  },

  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: HomePage },
      { path: 'usuarios', component: () => import('pages/UsuariosPage.vue') },
      { path: 'paquetes', component: () => import('pages/PaquetesPage.vue') },
      { path: 'rutas', component: () => import('pages/RutasPage.vue') }

    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/tracking',
    component: () => import('pages/TrackingPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
