import React from 'react';
import styles from './ContactBlock.module.scss';
import Button from '../Button/Button';

const ContactBlock = () => (
  <section className={`"row " ${styles.ContactBlock}`}>

    <div className="col-md-6">
      <h2>Contact us for the service you want to use </h2>
    </div>

    <div className="col-md-6">
      <Button
        onClick={() => console.log(1)}
        type="button"
        variant="blue--white"
        text="Contact us"
        size="medium"
      />
    </div>

  </section>
);

export default ContactBlock;
