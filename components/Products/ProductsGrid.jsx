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
          <div className="px-6 lg:px-0 col-span-12 lg:col-span-9 grid grid-cols-2 gap-12">
            {products.map((product) => (
              <div
                key={product.node.id}
                className="shadow-lg rounded pb-4 mb-8"
              >
                <div className="relative overflow-hidden pb-80 mb-6">
                  <img
                    src={
                      product.node.image
                        ? product.node.image.url
                        : 'https://media.graphcms.com/nB9v9NnTHm3OVQ7h656T'
                    }
                    className="object-top absolute h-80 w-full object-contain rounded-t-lg"
                    alt=""
                  />
                </div>
                <div className="p-0 lg:p-4">
                  <h3 className="text-lg text-gray-800">{product.node.name}</h3>
                  <p>
                    {product.node.productType
                      ? product.node.productType.name
                      : null}
                  </p>
                  <small className="text-sm text-gray-500">
                    {product.node.description}
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3 col-span-1 ml-4">
            <ul className="flex flex-col sticky top-16">
              <Link href="/products">
                <a className="text-lg hover:text-brown">All Products</a>
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.node.id}
                  href={`/category/${category.node.slug}`}
                >
                  <a className="text-lg hover:text-brown">
                    {category.node.title}
                  </a>
                </Link>
              ))}
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
