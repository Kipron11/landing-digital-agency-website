import React from 'react';
import {
  Route, BrowserRouter as Router, Routes, NavLink,
} from 'react-router-dom';
import style from './Header.module.scss';
import Button from '../Button/Button';

const Header = () => {
  const a = 1;
  return (
    <section className={style.header}>
      <Router>
        <div className={style.logo}>
          <img src="../../assets/img/Logo.png" alt="Logo" width="40" />
          Enver
        </div>
        <div className={style.navigation}>
          <nav className={style.nav}>
            <NavLink className={style.NavLink} to="/">Home</NavLink>
            <NavLink className={style.NavLink} to="/">Services</NavLink>
            <NavLink className={style.NavLink} to="/">Our Project</NavLink>
            <NavLink className={style.NavLink} to="/">About us</NavLink>
          </nav>
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
        <div className={style.button}>
          <Button
            onClick={() => console.log('Button')}
            type="button"
            text="Contact us"
            variant="transparent--white"
            size="medium"
          />
        </div>
      </Router>
    </section>

  );
};

export default Header;
