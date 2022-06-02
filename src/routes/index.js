import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

//no-login
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
];

//login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
