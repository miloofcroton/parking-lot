import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Parking Lot</h1>
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
