import React, { Fragment } from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <Fragment>
      <div className="max-w-6xl mx-auto py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-black uppercase">
              From the beginning
            </h3>
            <p className="text-xl text-gray-700 mt-2 lg:pr-24">
              Bronscor was established in 1992 as a solely owned black company,
              supplying maintenance materials & engineering services to
              factories, manufacturing concerns & engineering companies
              Nationally
            </p>
          </div>
          <div className="col-span-1 max-h-[400px]">
            <Image
              src="/images/pipes.jpg"
              alt=""
              width={960}
              height={640}
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
          <div className="col-span-1 max-h-[400px]">
            <Image
              src="/images/truck.jpg"
              alt=""
              width={960}
              height={640}
              className="h-full object-cover"
            />
          </div>
          <div className="col-span-1 lg:col-span-2 flex flex-col items-end">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-black uppercase">
              Great Service
            </h3>
            <p className="text-xl text-gray-700 mt-2 text-right md:pl-24">
              We pride ourselves on service, offering cut to size on most of our
              materials and a 24 hour breakdown service.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 text-gray-700">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-black uppercase">
              Our Vision
            </h3>
            <p className="text-xl text-gray-700 mt-2 lg:pr-24">
              To be one of the top leading special steels & engineering service
              suppliers in Sub-Saharan Africa.
            </p>
            <h4 className="text-lg mt-2">Our Mission</h4>
            <ul className="text-md list-disc pl-6">
              <li>To provide excellent service to our customers</li>
              <li>To provide a safe working environment for our staff</li>
              <li>To supply top quality products</li>
            </ul>
          </div>
          <div className="col-span-1 max-h-[400px]">
            <Image
              src="/images/machine.jpg"
              alt=""
              width={960}
              height={640}
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
