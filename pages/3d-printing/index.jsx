import React, { Fragment } from 'react';
import Image from 'next/image';
import { get3dPrinted } from '../../lib';

const index = ({ products }) => {
  console.log(products);
  return (
    <Fragment>
      <div
        className="h-[60vh] md:h-[70vh] bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: 'url(/images/products-banner.jpg)' }}
      >
        <div className="bg-brown bg-opacity-70 lg:h-[50%] lg:w-2/5 py-4  xl:pl-[130px] translate-y-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl xl:text-5xl uppercase px-6 lg:px-0">
            3D Printing
          </h1>
        </div>
      </div>
      <main className="max-w-6xl mx-auto py-16 px-6 lg:px-0">
        <h1 className="text-3xl font-bold">Our 3D Printing Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <p className="text-md py-4">
              From automotive to electronic parts, Bronscor can print parts with
              complex geometries. Our in house design team can reverse engineer
              and print your final completed parts. The material used is carbon
              filled nylon which yields accurate parts with exceptional strength
              and surface finish. This material is perfect for printing of
              functioning parts, such as soft jaws, robotic gripper arms to
              replacement parts for checking fixtuee of custom vintage and
              classic car parts
            </p>
          </div>
          <div className="px-6">
            <h3 className="text-lg font-medium">
              We provide the following 3D printing services
            </h3>
            <ul className="list-disc text-sm pl-6">
              <li>Scanning</li>
              <li>Drawing</li>
              <li>3D Printing Filament</li>
              <li>3D Printer Sales</li>
            </ul>
            <p className="text-md py-4">
              Contact us for all your 3D Printer requirements. Once we ascertain
              the usage for the 3D Printer, we will advise and assist with a
              quote for the correct Printer for your unique needs.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <h3 className="text-brown font-bold text-3xl text-center">
            Products
          </h3>

          <div className="w-full flex justify-center py-4">
            <ul className="pl-6 list-disc">
              <li>Production Line Final Assembley Tailgate Jig</li>
              <li>Production Line Final Assembley Taillight Jig</li>
              <li>Production Line Final Assembley Seatbelt Jig</li>
              <li>Production Line Final Assembley Headlamp Jig</li>
            </ul>
          </div>
        </div>
        <div className="grid -grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 py-6">
          {products.map((product) => (
            <div key={product.node.id} className="rounded-md shadow-2xl ">
              <div className="aspect-square rounded">
                <Image
                  src={product.node.image.url}
                  alt={product.node.name}
                  width={300}
                  height={300}
                />
              </div>
              <div className="bg-brown px-3 py-2 text-black rounded-b-md">
                <h3 className="text-sm font-medium">{product.node.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default index;

export async function getServerSideProps() {
  const products = await get3dPrinted();

  return {
    props: {
      products,
    },
  };
}
