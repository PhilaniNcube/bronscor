/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const ProductsGrid = ({ products, categories }) => {
  console.log(categories);

  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-gray-900">All Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="px-6 lg:px-0 col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product) => (
              <div
                key={product.node.id}
                className="shadow-lg p-2 rounded pb-4 mb-8 bg-brown bg-opacity-70"
              >
                <div className="p-0 lg:p-4">
                  <h3 className="text-lg text-gray-800 font-bold">
                    {product.node.shape}
                  </h3>
                  <p className="font-light">
                    Product Type:{' '}
                    {product.node.productType
                      ? product.node.productType.name
                      : null}
                  </p>
                  <p className="font-light">
                    {product.node.productCategory.title}
                  </p>
                  <small className="text-sm text-gray-500">
                    {product.node.dimensions}
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3 col-span-1 ml-4">
            <ul className="flex flex-col sticky top-16">
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
