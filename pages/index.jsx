import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import Content from '../components/Home/Content';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Content />
    </Fragment>
  );
}
