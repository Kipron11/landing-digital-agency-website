import React from 'react';
import styles from './PortfolioBlock.module.scss';

const PortfolioBlock = () => (
  <section>
    <div className="row center-md">
      <h2>Our Awesome Portfolio</h2>
    </div>
    <div className="row center-md">
      <div className="col-md-4 center-md top-md">
        <div className={styles.image1} />
      </div>
      <div className="col-md-4 center-md middle-md">
        <div className={styles.image2} />
      </div>
      <div className="col-md-4 center-md bottom-md">
        <div className={styles.image3} />
      </div>
    </div>
  </section>
);

export default PortfolioBlock;
