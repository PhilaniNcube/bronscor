/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[80vh] bg-center bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url(/images/geometric-small.jpg)" }}
      >
        <div className="grid max-w-6xl grid-cols-1 mx-auto lg:grid-cols-2">
          <div className="px-6 py-4 bg-brown bg-opacity-70">
            <h1 className="px-6 text-3xl font-bold uppercase xl:text-5xl lg:px-0">
              Your All In One <br />
              Solution
            </h1>
            <ul className="flex-wrap hidden my-6 mt-2 space-x-2 text-xs uppercase lg:flex xl:text-md">
              <li>Special Steels |</li>
              <li>Castings |</li>
              <li>Tools & Hardware |</li>
              <li>3D Print </li>
            </ul>
            <div className="flex flex-col max-w-6xl mx-auto space-y-2 text-white md:space-y-0 md:flex-row">
              <Link href="/about" passHref>
                <button
                  type="button"
                  className="flex space-x-3 w-[250px] md:w-fit bg-brown px-8 py-4 hover:shadow-md transition"
                >
                  <svg
                    xlinkTitle="More About Us"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 bg-white rounded-full text-brown"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>More About Us</title>
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
                <button
                  type="button"
                  className="flex space-x-3 w-[250px] md:w-fit bg-gray-300 px-8 py-4 hover:shadow-md transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black rounded-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Our Products</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-black uppercase">Our Products</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center pt-4 pb-12 bg-black bg-opacity-70">
            <img
              src="/images/express-transparent.webp"
              alt="Logo"
              className="object-cover w-1/2"
            />
            <button type="button" className="p-4 text-black bg-brown">
              <Link href="https://store.bronscorcc.co.za">
                Visit Our Online Store
              </Link>
            </button>

          </div>
        </div>
      </div>
      <div className="bg-brown min-h-[230px] z-10">
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/steel.svg" alt="icon" className="w-8 h-8" />
            <h3 className="text-xl text-center text-black uppercase">
              Special Steels
            </h3>
            <p className="text-xs text-center text-black">
              Our steels include: Bronze, Brass, Copper, Cast Iron, Stainless
              Steel, Aluminium & more
            </p>
            <Link href="/products" passHref>
              <button
                type="button"
                className="px-6 py-1 text-black border-2 border-black hover:bg-brown"
              >
                VIEW
              </button>
            </Link>
          </div>
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/casting.svg" alt="icon" className="w-8 h-8" />
            <h3 className="text-xl text-center text-black uppercase">
              Castings
            </h3>
            <p className="text-xs text-center text-black">
              We specialise in Crane Wheel Customisation as well as Brake Wheels
              And Sheaves.
            </p>
            <Link href="/castings" passHref>
              <button
                type="button"
                className="px-6 py-1 text-black border-2 border-black hover:bg-brown"
              >
                VIEW
              </button>
            </Link>
          </div>
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/tools.svg" alt="icon" className="w-8 h-8" />
            <h3 className="text-xl text-center text-black uppercase">
              Tools & Hardware
            </h3>
            <p className="text-xs text-center text-black">
              Big or small, whatever tools you need for your business, we can
              assist.
            </p>
            <Link href="/tools" passHref>
              <button
                type="button"
                className="px-6 py-1 text-black border-2 border-black hover:bg-brown"
              >
                VIEW
              </button>
            </Link>
          </div>
          <div className="bg-white h-[300px] flex flex-col justify-center items-center px-4 shadow-md space-y-2 z-20 -translate-y-3">
            <img src="/icons/steel.svg" alt="icon" className="w-8 h-8" />
            <h3 className="text-xl text-center text-black uppercase">
              3D Printing
            </h3>
            <p className="text-xs text-center text-black">
              From automotive to electronic parts, Bronscor can print parts with
              complex geometries.
            </p>
            <Link href="/3d-printing" passHref>
              <button
                type="button"
                className="px-6 py-1 text-black border-2 border-black hover:bg-brown"
              >
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
