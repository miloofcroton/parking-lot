import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Cars from '../components/pages/Cars';


export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home/',
    Component: Home,
    linkTo: () => '/home'
  },
  CARS: {
    path: '/cars/',
    Component: Cars,
    linkTo: () => '/cars'
  }
};
