import About from '../components/pages/About';
import Home from '../components/pages/Home';
import CarListAll from '../components/containers/CarListAll';
import CarListLot from '../components/containers/CarListLot';
import CarSearchAll from '../components/containers/CarSearchAll';
import CarSearchLot from '../components/containers/CarSearchLot';
import CarDetail from '../components/containers/CarDetail';
import CarForm from '../components/containers/CarForm';

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
