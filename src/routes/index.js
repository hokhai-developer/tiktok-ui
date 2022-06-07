import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//no-login
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Upload, layout: null },
];

//login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
