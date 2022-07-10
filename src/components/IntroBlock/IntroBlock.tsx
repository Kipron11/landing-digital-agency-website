import React from 'react';
import styles from './IntroBlock.module.scss';
import Button from '../Button/Button';

const IntroBlock = () => (
  <section className={`row ${styles.IntroBlock}`}>
    <div className="col-md-6">
      <h1>Build Your Awesome Platform</h1>
      <p>
        Enver studio is a digital studio
        that offers several services such as
        UI/UX Design to developers, we will provide
        the best service for those of you who use our services.
      </p>
      <Button
        onClick={() => console.log(1)}
        type="button"
        text="Our Services"
        variant="blue--white"
        size="medium"
      />
    </div>
    <div className="col-md-6">
      <div className={styles.introIMG} />
    </div>
  </section>
);

export default IntroBlock;
