import React from 'react';
import styles from './Card.module.scss';

type CardProps = {
    color:string,
    title:string,
    text:string
};

const Card = ({ color, title, text }:CardProps) => (
  <div className={styles.cardForm}>
    <div style={{ background: color }} className={styles.circle} />
    <div className={styles.textArea}>
      <span className={styles.span}>{title}</span>
      <p>{text}</p>
    </div>
  </div>
);

export default Card;
