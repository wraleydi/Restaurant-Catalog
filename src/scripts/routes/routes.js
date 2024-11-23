import Detail from '../view/pages/detail';
import Home from '../view/pages/home';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
};

export default routes;
