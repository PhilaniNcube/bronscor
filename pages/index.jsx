import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import Content from '../components/Home/Content';
import Services from '../components/Services/Services';
import { getProducts } from '../lib';

export default function Home({ products }) {
  console.log(products);

  return (
    <Fragment>
      <Hero />
      <Content />
      <Services />
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
