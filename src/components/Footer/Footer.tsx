import React from 'react';
import {
  BrowserRouter as Router, NavLink, Route, Routes,
} from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => (
  <section className={styles.footer}>
    <Router>
      <div className={styles.logo}>
        <div className={styles.logoImg} />
        Enver
      </div>
      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <NavLink className={styles.NavLink} to="/">Support</NavLink>
          <NavLink className={styles.NavLink} to="/">Privacy Policy</NavLink>
          <NavLink className={styles.NavLink} to="/">Terms and Conditions</NavLink>
        </nav>
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
      <div className={styles.Mark}>
        <span>© 2020 Enver, All Rights Reserved</span>
      </div>
    </Router>
  </section>
);

export default Footer;
