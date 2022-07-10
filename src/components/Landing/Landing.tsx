import React from 'react';
import styles from './Landing.module.scss';
import Header from '../Header/Header';
import IntroBlock from '../IntroBlock/IntroBlock';
import VideoBlock from '../VideoBlock/VideoBlock';
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import PortfolioBlock from '../PortfolioBlock/PortfolioBlock';
import ContactBlock from '../ContactBlock/ContactBlock';
import Footer from '../Footer/Footer';

const Landing = () => (
  <section className="row center-md">
    <section className={`col-md center-md ${styles.Landing}`}>
      <Header />
      <IntroBlock />
      <VideoBlock />
      <ServicesBlock />
      <PortfolioBlock />
      <ContactBlock />
      <Footer />
    </section>
  </section>
);

export default Landing;
