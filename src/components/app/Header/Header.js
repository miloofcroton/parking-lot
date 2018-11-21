import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

import config from '../../../site/config';

const Header = () => {

  const links = [
    { label: 'Home', path: '/home' },
    { label: 'Cars', path: '/cars' },
    { label: 'About', path: '/about' }
  ];
  const LinkComponents = links.map(link => {
    return (
      <Link key={link.label} to={link.path} className={styles.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={styles.header}>
      <h1>{config.title}</h1>
      <nav className={styles.nav}>
        {LinkComponents}
      </nav>
    </header>
  );
};

export default Header;
