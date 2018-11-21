import About from '../components/pages/About';
import Home from '../components/pages/Home';
import AllCars from '../components/containers/AllCars';


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
    Component: AllCars,
    linkTo: () => '/cars'
  }
};
