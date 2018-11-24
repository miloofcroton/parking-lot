import About from '../components/pages/About';
import CarsListAll from '../components/containers/CarsListAll';
import Home from '../components/pages/Home';
import CarDetail from '../components/containers/CarDetail';
import CarForm from '../components/containers/CarForm';
import CarSearchAll from '../components/containers/CarSearchAll';

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
    Component: CarsListAll,
    linkTo: () => '/cars'
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetail,
    linkTo: id => `/cars/${id}`
  },
  CAR_FORM: {
    path: '/cars/new',
    Component: CarForm,
    linkTo: () => '/cars/new'
  },
  CAR_SEARCH_ALL: {
    path: '/cars/search',
    Component: CarSearchAll,
    linkTo: () => '/cars/search'
  },
};
