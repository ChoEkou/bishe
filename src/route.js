
import Banner from '../src/components/bannerLun/Banner';
import Community from '../src/components/community/Community';
import Active from '../src/components/active/Active';
import News from '../src/components/news/News';
import Rules from '../src/components/rules/Rules';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import User from '../src/components/user/User';
import Admin from './components/admin/Admin';
import Apply from './components/user/components/apply/Apply';

const routes = [
  {
    path: '/',
    exact: true,
    component: Banner
  },
  {
    path: '/community',
    exact: true,
    component: Community
  },
  {
    path: '/active',
    exact: true,
    component: Active
  },
  {
    path: '/news',
    exact: true,
    component: News
  },
  {
    path: '/rules',
    exact: true,
    component: Rules
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/user',
    exact: true,
    component: User,
    routes: [
      {
        path: '/user/apply',
        component: Apply
      }
    ]
  },
  {
    path: '/admin',
    exact: true,
    component: Admin
  },
];

export default routes;