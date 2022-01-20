/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

export default function Content() {
  return (
    <Fragment>
      <div
        className="min-h-[80vh] py-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)',
        }}
      >
        <div className="w-full">
          <img
            src="/images/building.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-brown h-[90%] w-[85%] self-end">
          <div className="h-full w-full bg-white md:-translate-x-12 md:-translate-y-8 p-8 shadow-xl">
            <h2 className="text-brown text-2xl">
              Ready to Bring Bigger, Better, Faster & Stronger Products Than
              Ever
            </h2>
            <p className="py-4 font-light">
              Bronscor was established in 1992 as a solely owned black company,
              supplying maintenance materials & engineering services to
              factories, manufacturing concerns & engineering companies
              Nationally
            </p>
            <h3 className="text-brown text-lg">GREAT SERVICE</h3>
            <p className="font-light">
              We pride ourselves on service, offering cut to size on most of our
              materials and a 24 hour breakdown service.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
