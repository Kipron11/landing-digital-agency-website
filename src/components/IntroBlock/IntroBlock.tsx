import React from 'react';
import styles from './IntroBlock.module.scss';
import Button from '../Button/Button';

const IntroBlock = () => (
  <section className={`row ${styles.IntroBlock}`}>
    <div className="col-md-6 center-md">
      <h1 className={styles.IntroH1}>Build Your Awesome Platform</h1>
      <p className={styles.IntroP}>
        Enver studio is a digital studio
        that offers several services such as
        UI/UX Design to developers, we will provide
        the best service for those of you who use our services.
      </p>
      <div className={styles.IntroButton_div}>
        <Button
          onClick={() => console.log(1)}
          type="button"
          text="Our Services"
          variant="blue--white"
          size="medium"
        />
      </div>
    </div>
    <div className={`col-md-6 ${styles.IntroIMG_div}`}>
      <div className={styles.IntroIMG} />
    </div>
  </section>
);

export default IntroBlock;
