/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[80vh] bg-center bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: 'url(/images/geometric-small.jpg)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="bg-brown bg-opacity-70 px-6 py-4">
            <h1 className="text-3xl xl:text-5xl uppercase font-bold px-6 lg:px-0">
              Your All In One <br />
              Solution
            </h1>
            <ul className="hidden lg:flex flex-wrap space-x-2 my-6 text-xs xl:text-md uppercase mt-2">
              <li>Special Steels |</li>
              <li>Castings |</li>
              <li>Tools & Hardware |</li>
              <li>3D Print </li>
            </ul>
            <div className="max-w-6xl mx-auto flex flex-col space-y-2 md:space-y-0 md:flex-row  text-white">
              <Link href="/about" passHref>
                <button className="flex space-x-3 w-[250px] md:w-fit bg-brown px-8 py-4 hover:shadow-md transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rounded-full bg-white text-brown"
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
                  <p className="uppercase">More About Us</p>
                </button>
              </Link>
              <Link href="/products" passHref>
                <button className="flex space-x-3 w-[250px] md:w-fit bg-gray-300 px-8 py-4 hover:shadow-md transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rounded-full text-black"
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
                  <p className="uppercase text-black">Our Products</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-black bg-opacity-70 p-6">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-brown min-h-[230px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/steel.svg" alt="icon" className="h-8 w-8" />
            <h3 className="text-xl text-black uppercase text-center">
              Special Steels
            </h3>
            <p className="text-xs text-center text-black">
              Our steels include: Bronze, Brass, Copper, Cast Iron, Stainless
              Steel, Aluminium & more
            </p>
            <Link href="/products" passHref>
              <button className="border-2 text-black py-1 px-6 border-black hover:bg-brown">
                VIEW
              </button>
            </Link>
          </div>
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/casting.svg" alt="icon" className="h-8 w-8" />
            <h3 className="text-xl text-black uppercase text-center">
              Castings
            </h3>
            <p className="text-xs text-center text-black">
              We specialise in Crane Wheel Customisation as well as Brake Wheels
              And Sheaves.
            </p>
            <Link href="/castings" passHref>
              <button className="border-2 text-black py-1 px-6 border-black hover:bg-brown">
                VIEW
              </button>
            </Link>
          </div>
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/tools.svg" alt="icon" className="h-8 w-8" />
            <h3 className="text-xl text-black uppercase text-center">
              Tools & Hardware
            </h3>
            <p className="text-xs text-center text-black">
              Big or small, whatever tools you need for your business, we can
              assist.
            </p>
            <Link href="/tools" passHref>
              <button className="border-2 text-black py-1 px-6 border-black hover:bg-brown">
                VIEW
              </button>
            </Link>
          </div>
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/steel.svg" alt="icon" className="h-8 w-8" />
            <h3 className="text-xl text-black uppercase text-center">
              3D Printing
            </h3>
            <p className="text-xs text-center text-black">
              From automotive to electronic parts, Bronscor can print parts with
              complex geometries.
            </p>
            <Link href="/3d-printing" passHref>
              <button className="border-2 text-black py-1 px-6 border-black hover:bg-brown">
                VIEW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
