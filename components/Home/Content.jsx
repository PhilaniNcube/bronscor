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
        <div className="bg-brown lg:h-[90%] w-[85%] self-end">
          <div className="h-full w-full bg-white md:-translate-x-12 md:-translate-y-8 p-8 shadow-xl">
            <h2 className="text-brown text-xl md:text-2xl">
              Ready to Bring Bigger, Better, Faster & Stronger Products Than
              Ever
            </h2>
            <p className="py-4 font-light text-sm lg:text-md">
              Bronscor was established in 1992 as a solely owned black company,
              supplying maintenance materials & engineering services to
              factories, manufacturing concerns & engineering companies
              Nationally
            </p>
            <h3 className="text-brown text-lg">GREAT SERVICE</h3>
            <p className="font-light text-sm lg:text-md">
              We pride ourselves on service, offering cut to size on most of our
              materials and a 24 hour breakdown service.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-12">
        <h3 className="text-2xl text-black text-center uppercase">
          Our Clients
        </h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-4">
          <img
            src="/images/c01.png"
            className="w-full object-cover"
            alt="logo"
          />
          <img
            src="/images/c02.png"
            className="w-full object-cover"
            alt="logo"
          />
          <img
            src="/images/c03.png"
            className="w-full object-cover"
            alt="logo"
          />
          <img
            src="/images/c04.png"
            className="w-full object-cover"
            alt="logo"
          />
          <img
            src="/images/c05.png"
            className="w-full object-cover"
            alt="logo"
          />
        </div>
      </div>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8612911669566!2d25.562704714925175!3d-33.94469553043267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad17cd76cb8c5%3A0xea3d4bddb112849e!2s51%20Mangold%20St%2C%20Newton%20Park%2C%20Gqeberha%2C%206055!5e0!3m2!1sen!2sza!4v1642706923046!5m2!1sen!2sza"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[50vh] z-10"
        ></iframe>
        <div className="absolute h-[58vh] bg-brown md:right-24 -top-7 z-30 p-8 shadow-2xl">
          <h4 className="text-xl">Our Location</h4>
          <p className="text-sm pt-1">51 Mangold Street</p>
          <p className="text-sm">Newton Park</p>
          <p className="text-sm">Port Elizabeth</p>
          <h4 className="text-xl mt-2">Quick Contact</h4>
          <p className="text-sm pt-1">041 543 1530</p>
          <p className="text-sm">info@bronscorcc.co.za</p>
          <h4 className="text-xl mt-2">Operating Hours</h4>
          <p className="text-sm pt-1">Monday - Thursday</p>
          <p className="text-sm">08:00  - 16:45 </p>
          <p className="text-sm pt-1">Friday</p>
          <p className="text-sm">08:00  - 15:00 </p>
          <button className="flex space-x-3 w-[250px] md:w-fit bg-black mt-4 px-8 py-2 hover:shadow-md transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 rounded-full bg-white text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="uppercase text-white">Request A Quote</p>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
