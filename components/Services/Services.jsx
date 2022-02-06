import React from 'react';

export default function Services() {
  return (
    <div className="dark:bg-black">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
            <h1>We service the following industries</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6"></div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Motor Industries</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6"></div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Foundries</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6"></div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Textiles</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6"></div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Tyres</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6"></div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Quarries</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6"></div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Mining and many others</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
