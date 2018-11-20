import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

import config from '../../../site/config';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>{config.title}</h1>
      <nav className={styles.nav}>
        <Link
          to={'/about'}
          className={styles.link}
        >
          About
          </Link>
      </nav>
    </header>
  );
};

export default Header;
