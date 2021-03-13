import Talk from './components/talk/Talk';
import Apply from './components/apply/Apply'

const user = [
  {
    path: '/user',
    component: Talk
  },
  {
    path: '/user/apply',
    component: Apply
  }
];

export default user;