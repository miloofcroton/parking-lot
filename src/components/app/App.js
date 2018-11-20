import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

import Header from './header/Header';
import Footer from './footer/Footer';

import 'normalize.css';
import styles from './App.css';

const App = () => {

  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route component={ROUTES.ABOUT.Component} path={ROUTES.ABOUT.path} />

          <Redirect to={ROUTES.ABOUT.path} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App
