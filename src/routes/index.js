import About from '../components/pages/About';
import AllCars from '../components/containers/AllCars';
import Home from '../components/pages/Home';
// import CarDetail from '../components/pages/Cars/CarDetail';
import CarDetail from '../components/containers/CarDetail';

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
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetail,
    linkTo: id => `/cars/${id}`
  }
};
