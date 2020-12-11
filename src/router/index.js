import Vue from 'vue'
import VueRouter from 'vue-router'
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
import UpdateUserPage from '../views/EditUserPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    paths: '/Login',
    name: 'LoginPageRoute',
    component: LoginPage,
  },
  {
    paths: '/ADMCycles',
    name: 'ADMCyclesPageRoute',
    component: ADMCyclePage,
  },
  {
    paths: '/ADMSettings',
    name: 'ADMSettingsPageRoute',
    component: ADMSettingsPage,
  },
  {
    paths: '/ADMUsers',
    name: 'ADMUsersPageRoute',
    component: ADMUsersPage,
  },
  {
    paths: '/Create',
    name: 'CreateUserPageRoute',
    component: CreateUserPage,
  },
  {
    paths: '/Cycles',
    name: 'CyclesListPageRoute',
    component: CycleListPage,
  },
  {
    paths: '/cycle/:id',
    name: 'CyclePageRoute',
    component: CyclesPage,
  },
  {
    paths: '/Profile',
    name: 'ProfilePageRoute',
    component: ProfilePage,
  },
  {
    paths: '/QR',
    name: 'QRScanPageRoute',
    component: QRScanPage,
  },
  {
    paths: '/Settings',
    name: 'SettingsPageRoute',
    component: SettingsPage,
  },
  {
    paths: '/Update/:id',
    name: 'UpdateUserPageRoute',
    component: UpdateUserPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  path: routes
})
router.replace({ path: '/', redirect: '/Login'})
export default router
