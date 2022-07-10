import React from 'react';
import styles from './VideoBlock.module.scss';

const VideoBlock = () => (
  <section>
    <div className="row center-md">
      <h2 className="col-md-6">Why Enver Is The Best Choice?</h2>
      <p className="col-md-6">Watch this one minute video so you understand why you should use our services!</p>
    </div>
    <div className="row center-md">
      {/* <iframe */}
      {/*  title="Video" */}
      {/*  width="1200" */}
      {/*  height="600" */}
      {/*  src="https://www.youtube.com/embed/iik25wqIuFo" */}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
      {/*  allowFullScreen */}
      {/*  frameBorder="0" */}
      {/* /> */}
      <div className={styles.placeholder} />
    </div>
  </section>
);

export default VideoBlock;
