import React, { Fragment } from 'react';

const index = () => {
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[70vh] bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: 'url(/images/products-banner.jpg)' }}
      >
        <div className="bg-brown bg-opacity-70 lg:h-[50%] lg:w-2/5 py-4  xl:pl-[130px] translate-y-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl xl:text-5xl uppercase px-6 lg:px-0">
            3D Printing
          </h1>
        </div>
      </div>
      <main className="max-w-6xl mx-auto py-16">
        <h1 className="text-3xl font-bold">Our 3D Printing Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <p className="text-md py-4">
              From automotive to electronic parts, Bronscor can print parts with
              complex geometries. Our in house design team can reverse engineer
              and print your final completed parts. The material used is carbon
              filled nylon which yields accurate parts with exceptional strength
              and surface finish. This material is perfect for printing of
              functioning parts, such as soft jaws, robotic gripper arms to
              replacement parts for checking fixtuee of custom vintage and
              classic car parts
            </p>
          </div>
          <div className="px-6">
            <h3 className="text-lg font-medium">
              We provide the following 3D printing services
            </h3>
            <ul className="list-disc text-sm pl-6">
              <li>Scanning</li>
              <li>Drawing</li>
              <li>3D Printing Filament</li>
              <li>3D Printer Sales</li>
            </ul>
            <p className="text-md py-4">
              Contact us for all your 3D Printer requirements. Once we ascertain
              the usage for the 3D Printer, we will advise and assist with a
              quote for the correct Printer for your unique needs.
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default index;
