import React from 'react';

import config from '../../../site/config';

import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{config.footer}</p>
    </footer>
  );
};

export default Footer;
