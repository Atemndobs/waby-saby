import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
path: '/',
component: () => import('layouts/MainLayout.vue'),
children: [
{ path: '/task', component: () => import('pages/PageTodo.vue')},
{ path: '/help', component: () => import('pages/Help.vue') },
{
path: '/putz',
component: () => import('pages/PutzPlan.vue')
},
{
path: '/settings',
component: () => import('pages/PageSettings.vue')
}
]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
