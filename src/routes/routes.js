import About from '../components/pages/about/About';


export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  }
};
