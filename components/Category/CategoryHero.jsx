/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import ProductsGrid from '../Products/ProductsGrid';

const CategoryHero = ({ category }) => {
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[70vh] bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: 'url(/images/products-banner.jpg)' }}
      >
        <div className="bg-brown bg-opacity-70 lg:h-[50%] lg:w-2/5 py-4  xl:pl-[130px] translate-y-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl xl:text-5xl uppercase px-6 lg:px-0">
            {category.title}
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 col-span-12 lg:col-span-9 grid grid-cols-2 gap-12 py-10">
        {category.products.map((product) => (
          <div key={product.id} className="shadow-lg rounded pb-4 mb-8">
            <div className="relative overflow-hidden pb-80 mb-6">
              <img
                src={
                  product.image
                    ? product.image.url
                    : 'https://media.graphcms.com/nB9v9NnTHm3OVQ7h656T'
                }
                className="object-top absolute h-80 w-full object-contain rounded-t-lg"
                alt=""
              />
            </div>
            <div className="p-0 lg:p-4">
              <h3 className="text-lg text-gray-800">{product.name}</h3>
              <p>{product.productType ? product.productType.name : null}</p>
              <small className="text-sm text-gray-500">
                {product.description}
              </small>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryHero;
