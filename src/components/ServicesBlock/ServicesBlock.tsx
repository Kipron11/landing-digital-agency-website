import React from 'react';
import Card from '../Card/Card';
import styles from './ServicesBlock.module.scss';

const servicesInfo = [
  {
    title: 'Development',
    color: '#5454D4',
    text: 'Create a platform with the best and coolest quality from us.',
  },
  {
    title: 'UI/UX Designer',
    color: '#F04037',
    text: 'We provide UI/UX Design services, and of course with the best quality',
  },
  {
    title: 'Graphic Designer',
    color: '#FEDC5A',
    text: 'We provide Graphic Design services, with the best designers',
  },
  {
    title: 'Motion Graphic',
    color: '#FEDC5A',
    text: 'Create a platform with the best and coolest quality from us.',
  },
  {
    title: 'Photography',
    color: '#5454D4',
    text: 'We provide Photography services, and of course with the best quality',
  },
  {
    title: 'Videography',
    color: '#F04037',
    text: 'Create a platform with the best and coolest quality from us.',
  },
];

const ServicesBlock = () => (
  <section className="center-md">
    <div className="row center-md">
      <h2>The Service We Provide For You</h2>
    </div>
    <div className={`row center-md ${styles.Cards_div}`}>
      <div className={`col-md-12 center-md ${styles.Cards}`}>
        {servicesInfo.map(({ title, color, text }) => (
          <Card color={color} title={title} text={text} />
        ))}

      </div>
    </div>
  </section>
);

export default ServicesBlock;
