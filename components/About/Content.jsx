import React, { Fragment } from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <Fragment>
      <div className="max-w-6xl py-12 mx-auto bg-white">
        <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl text-black uppercase md:text-3xl lg:text-4xl">
              From the beginning
            </h3>
            <p className="mt-2 text-xl text-gray-700 lg:pr-24">
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
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 max-h-[400px]">
            <Image
              src="/images/truck.jpg"
              alt=""
              width={960}
              height={640}
              className="object-cover h-full"
            />
          </div>
          <div className="flex flex-col items-end col-span-1 lg:col-span-2">
            <h3 className="text-2xl text-black uppercase md:text-3xl lg:text-4xl">
              Great Service
            </h3>
            <p className="mt-2 text-xl text-right text-gray-700 md:pl-24">
              We pride ourselves on service, offering cut to size on most of our
              materials and a 24 hour breakdown service.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 py-8 text-gray-700 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl text-black uppercase md:text-3xl lg:text-4xl">
              Our Vision
            </h3>
            <p className="mt-2 text-xl text-gray-700 lg:pr-24">
              To be one of the top leading special steels & engineering service
              suppliers in Sub-Saharan Africa.
            </p>
            <h4 className="mt-2 text-lg">Our Mission</h4>
            <ul className="pl-6 list-disc text-md">
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
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 py-8 text-gray-700">
          <h4 className="text-2xl text-black uppercase md:text-3xl lg:text-4xl">
            Shipping and Delivery
          </h4>
          <ul className="pl-6 list-disc text-md">
            <li>
              Once an order has been received, we will process your order
              internally.
            </li>
            <li>
              Once the order is ready, a waybill will be sent to the customer.
            </li>
            <li>
              The order will be shipped to the customer. Depending on location
              or area, this will take between 1 to 3 days.
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
