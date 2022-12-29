import React from 'react';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <h3>Sitio web desarrollado con Vue + React</h3>
      <h4>Codo a Codo - 2022</h4>
    </footer>
  );
};

export default Footer;
