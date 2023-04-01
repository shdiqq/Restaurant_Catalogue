import Details from '../views/pages/details';
import Favorites from '../views/pages/favorites';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page,
  '/home': Home,
  '/detail/:id': Details,
  '/favorite': Favorites,
};

export default routes;
