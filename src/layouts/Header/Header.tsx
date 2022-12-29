import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#default" className={styles.logo}>
        <FontAwesomeIcon icon={faRobot} /> <span className={styles.logoText}>Generador de memes</span>
      </a>
      <div className={styles.headerRight}>
        <Link to="/home">Inicio</Link>
        <Link to="/about">Info</Link>
      </div>
    </header>
  );
};

export default Header;
