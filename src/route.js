
import Banner from '../src/components/bannerLun/Banner';
import Community from '../src/components/community/Community';
import Active from '../src/components/active/Active';
import News from '../src/components/news/News';
import Rules from '../src/components/rules/Rules';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import User from '../src/components/user/User';
import Admin from './components/admin/Admin';
import Apply from '../src/components/user/components/apply/Apply';
import Talk from '../src/components/user/components/talk/Talk';
import AppHistory from '../src/components/user/components/apphistory/AppHistory';
import ShenPi from '../src/components/admin/components/shenpi/ShenPi';
import Gonggao from '../src/components/admin/components/gonggao/Gonggao';
import Members from '../src/components/admin/components/members/Members';


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
    component: User,
    routes: [
      {
        path: '/talk',
        exact: true,
        component: Talk
      },
      {
        path: '/apply',
        exact: true,
        component: Apply
      },
      {
        path: '/apphistory',
        exact: true,
        component: AppHistory
      },
    ]
  },
  {
    path: '/admin',
    component: Admin,
    routes: [
      {
        path: '/shenpi',
        exact: true,
        component: ShenPi
      },
      {
        path: '/gonggao',
        exact: true,
        component: Gonggao
      },
      {
        path: '/members',
        exact: true,
        component: Members
      },
    ]
  },
  
];

export default routes;