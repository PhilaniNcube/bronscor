import Link from 'next/link';
import React, { Fragment } from 'react';

const index = () => {
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[70vh] bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: 'url(/images/products-banner.jpg)' }}
      >
        <div className="bg-brown bg-opacity-70 lg:h-[50%] lg:w-2/5 py-4  xl:pl-[130px] translate-y-1/2 flex flex-col justify-center text-left">
          <h1 className="px-6 text-3xl uppercase xl:text-5xl lg:px-0">Tools</h1>
        </div>
      </div>
      <main className="max-w-6xl py-16 mx-auto bg-white">
        <h1 className="text-3xl font-bold">Our Specials</h1>
        <div className="flex items-center justify-center space-x-6">
          <Link href="/documents/Specials.pdf" passHref>
            <button type="button" className="px-8 py-2 bg-black text-brown">
              Back At Work Specials
            </button>
          </Link>
          <Link href="/documents/Q20.pdf" passHref>
            <button type="button" className="px-8 py-2 bg-black text-brown">
              Q20 Specials
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
          <p className="text-sm">
            Big or small, whatever tools you need for your business, we can
            assist. We are not limited to the products displayed in the
            downloadable brochure.
          </p>
          <p className="text-sm">
            Please contact us or visit our store at 51 Mangold Street to discuss
            your needs and our highly trained and friendly team will be on hand
            to assist you.
          </p>
        </div>
      </main>
    </Fragment>
  );
};

export default index;
