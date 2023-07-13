/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const ProductsGrid = ({ products, categories }) => {
  console.log(categories);

  return (
    <div className="py-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-gray-900 md:text-4xl">All Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="grid grid-cols-1 col-span-12 gap-12 px-6 lg:px-0 lg:col-span-9 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.id} className="mb-8 rounded shadow-lg overflow-clip">
                <img
                  src={product.image}
                  className="object-contain w-full h-44"
                  alt={product.title}
                />
                <div className="p-0 lg:p-4 bg-brown">
                  <h3 className="text-lg font-bold text-black">
                    {product.title}
                  </h3>

                  <small className="text-sm text-black">{product.length}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1 ml-4 lg:col-span-3">
            <ul className="sticky flex flex-col top-16">
              <Link href="/products">
                <a className="text-lg hover:text-brown">Steels</a>
              </Link>

              <Link href="/castings">
                <a className="text-lg hover:text-brown">Castings</a>
              </Link>
              <Link href="/tools">
                <a className="text-lg hover:text-brown">Tools</a>
              </Link>
              <Link href="/3d-printing">
                <a className="text-lg hover:text-brown">3D Printing</a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
