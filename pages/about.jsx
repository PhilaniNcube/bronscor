import React, { Fragment } from 'react';
import AboutHero from '../components/About/AboutHero';
import Content from '../components/About/Content';

const about = () => {
  return (
    <Fragment>
      <AboutHero />
      <Content />
    </Fragment>
  );
};

export default about;
