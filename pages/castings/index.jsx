import React, { Fragment } from 'react';
import { getCastings } from '../../lib';

const Castings = ({ castings }) => {
  console.log(castings);

  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[70vh] bg-center bg-no-repeat bg-cover relative z-10"
        style={{ backgroundImage: 'url(/images/products-banner.jpg)' }}
      >
        <div className="bg-brown bg-opacity-70 lg:h-[50%] lg:w-2/5 py-4  xl:pl-[130px] translate-y-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl xl:text-5xl uppercase px-6 lg:px-0">
            Castings
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-4 lg:px-0">
        {castings.map((casting) => {
          return (
            <div
              key={casting.node.id}
              className="min-h-[80px] bg-brown rounded-md shadow-sm flex flex-col p-8"
            >
              <p className="text-white text-md lg:text-lg lg:font-bold">
                {casting.node.name}
              </p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Castings;

export async function getServerSideProps() {
  const castings = await getCastings();

  return {
    props: {
      castings,
    },
  };
}
