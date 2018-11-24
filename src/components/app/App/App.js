import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../../routes';

import Header from '../Header';
import Footer from '../Footer';

import 'normalize.css';
import styles from './App.css';

const App = () => {

  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact component={ROUTES.ABOUT.Component} path={ROUTES.ABOUT.path} />
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Route exact component={ROUTES.CARS.Component} path={ROUTES.CARS.path} />
          <Route exact component={ROUTES.LOT.Component} path={ROUTES.LOT.path} />
          <Route exact component={ROUTES.CAR_FORM.Component} path={ROUTES.CAR_FORM.path} />
          <Route exact component={ROUTES.CAR_SEARCH_ALL.Component} path={ROUTES.CAR_SEARCH_ALL.path} />
          <Route exact component={ROUTES.CAR_SEARCH_LOT.Component} path={ROUTES.CAR_SEARCH_LOT.path} />
          <Route component={ROUTES.CAR_DETAIL.Component} path={ROUTES.CAR_DETAIL.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
