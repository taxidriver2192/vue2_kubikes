import Vue from '../../node_modules/vue'
import VueRouter from '../../node_modules/vue-router'
import LoginPage from '../views/LoginPage.vue';
import ADMCyclePage from '../views/ADMCyclePage.vue';
import ADMSettingsPage from '../views/ADMSettingsPage.vue';
import ADMUsersPage from '../views/ADMUsersPage.vue';
import CreateUserPage from '../views/CreateUserPage.vue';
import CycleListPage from '../views/CycleListPage.vue';
import CyclesPage from '../views/CyclesPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import QRScanPage from '../views/QRScanPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import UpdateUserPage from '../views/UpdateUserPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    paths: '/Login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    paths: '/ADMCycles',
    name: 'ADMCyclesPage',
    component: ADMCyclePage,
  },
  {
    paths: '/ADMSettings',
    name: 'ADMSettingsPage',
    component: ADMSettingsPage,
  },
  {
    paths: '/ADMUsers',
    name: 'ADMUsersPage',
    component: ADMUsersPage,
  },
  {
    paths: '/Create',
    name: 'CreateUserPage',
    component: CreateUserPage,
  },
  {
    paths: '/Cycles',
    name: 'CyclesListPage',
    component: CycleListPage,
  },
  {
    paths: '/cycle/:id',
    name: 'CyclePage',
    component: CyclesPage,
  },
  {
    paths: '/Profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    paths: '/QR',
    name: 'QRScanPage',
    component: QRScanPage,
  },
  {
    paths: '/Settings',
    name: 'SettingsPage',
    component: SettingsPage,
  },
  {
    paths: '/Update/:id',
    name: 'UpdateUserPage',
    component: UpdateUserPage
  },
  {
    path: '/',
    redirect: '/Login'
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
