import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Page404 from '../views/pages/404';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/404': Page404,
};

export default routes;
