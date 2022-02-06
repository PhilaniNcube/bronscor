import React, { Fragment } from 'react';

const AboutHero = () => {
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[80vh] bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}
      >
        <div className="bg-brown bg-opacity-70 lg:h-[40%] lg:w-2/5 py-4  xl:pl-[130px] translate-y-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl xl:text-5xl uppercase px-6 lg:px-0">
            About Us
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutHero;
