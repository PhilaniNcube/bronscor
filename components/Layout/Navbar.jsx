/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowSmRightIcon,
  ChartBarIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { getCategories } from '../../lib/index';
import Link from 'next/link';

const solutions = [
  {
    name: 'Steels',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: 'products',
    icon: ChartBarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ categories }) {
  return (
    <Popover className="relative bg-black text-brown">
      <div className="flex px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between flex-1 max-w-7xl md:justify-start md:space-x-10">
          <div className="flex justify-start lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Bronscor</span>
                <img
                  className="object-cover w-52"
                  src="/images/bronscor_logo.png"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 bg-black rounded-md text-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="/">
              <a className="text-base font-medium text-brown">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-brown">About Us</a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <Fragment>
                  <Popover.Button
                    className={classNames(
                      open ? "text-brown" : "text-brown",
                      "group  inline-flex items-center text-base font-medium  "
                    )}
                  >
                    <span>Products</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-brown" : "text-brown",
                        "ml-2 h-5 w-5 group-hover:text-brown"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="relative grid gap-6 px-5 py-6 bg-black sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={`/${item.href}`}
                              passHref
                            >
                              <Popover.Button
                                as="a"
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-800"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-brown">
                                    {item.name}
                                  </p>
                                </div>
                              </Popover.Button>
                            </Link>
                          ))}
                          <Link href={`/castings`}>
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-800">
                              <div className="ml-4">
                                <p className="text-base font-medium text-brown">
                                  Castings
                                </p>
                              </div>
                            </a>
                          </Link>
                          <Link href={`/tools`}>
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-800">
                              <div className="ml-4">
                                <p className="text-base font-medium text-brown">
                                  Tools & Hardware
                                </p>
                              </div>
                            </a>
                          </Link>
                          <Link href={`/3d-printing`}>
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-800">
                              <div className="ml-4">
                                <p className="text-base font-medium text-brown">
                                  3D Printing
                                </p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Fragment>
              )}
            </Popover>
          </Popover.Group>
          <Link href="/contact">
            <a className="text-base font-medium text-brown">Contact Us</a>
          </Link>
          <Link href="/contact" passHref>
            <button className="items-center justify-center hidden h-full px-6 ml-8 transition duration-150 cursor-pointer bg-brown hover:bg-opacity-80 md:flex">
              <p className="text-black ">Get A Quote</p>
              <ArrowSmRightIcon className="w-6 text-black" />
            </button>
          </Link>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-black divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="/images/logo.png"
                    alt="Bronscor"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 bg-black rounded-md text-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={`/category/${item.href}`}
                      passHref
                    >
                      <Popover.Button
                        as="a"
                        className="flex items-center p-3 -m-3 rounded-md"
                      >
                        <span className="ml-3 text-base font-medium text-brown">
                          {item.name}
                        </span>
                      </Popover.Button>
                    </Link>
                  ))}
                  <Link href={`/castings`} passHref>
                    <Popover.Button
                      as="a"
                      className="flex items-center p-3 -m-3 rounded-md"
                    >
                      <span className="ml-3 text-base font-medium text-brown">
                        Castings
                      </span>
                    </Popover.Button>
                  </Link>
                  <Link href={`/tools`} passHref>
                    <Popover.Button
                      as="a"
                      className="flex items-center p-3 -m-3 rounded-md"
                    >
                      <span className="ml-3 text-base font-medium text-brown">
                        Tools & Hardware
                      </span>
                    </Popover.Button>
                  </Link>
                  <Link href={`/3d-printing`} passHref>
                    <Popover.Button
                      as="a"
                      className="flex items-center p-3 -m-3 rounded-md"
                    >
                      <span className="ml-3 text-base font-medium text-brown">
                        3D Printing
                      </span>
                    </Popover.Button>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/" passHref>
                  <Popover.Button
                    as="a"
                    className="text-base font-medium text-brown"
                  >
                    Home
                  </Popover.Button>
                </Link>
                <Link href="/about" passHref>
                  <Popover.Button
                    as="a"
                    className="text-base font-medium text-brown"
                  >
                    About Us
                  </Popover.Button>
                </Link>
                <Link href="/contact" passHref>
                  <Popover.Button
                    as="a"
                    className="text-base font-medium text-brown"
                  >
                    Contact Us
                  </Popover.Button>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: { products, categories },
  };
}
