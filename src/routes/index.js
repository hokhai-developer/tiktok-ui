import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//no-login
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Upload, layout: null },
];

//login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
