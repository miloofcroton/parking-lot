import About from '../components/pages/about/About.jsx';
import Home from '../components/pages/home/Home.jsx';
import CarListAll from '../components/containers/cars/CarListAll';
import CarListLot from '../components/containers/cars/CarListLot';
import CarSearchAll from '../components/containers/cars/CarSearchAll';
import CarSearchLot from '../components/containers/cars/CarSearchLot';
import CarDetail from '../components/containers/cars/CarDetail';
import CarForm from '../components/containers/cars/CarForm';

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
    Component: CarListAll,
    linkTo: () => '/cars'
  },
  LOT: {
    path: '/lot/',
    Component: CarListLot,
    linkTo: () => '/lot'
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
  CAR_SEARCH_LOT: {
    path: '/lot/search',
    Component: CarSearchLot,
    linkTo: () => '/lot/search'
  },
};
