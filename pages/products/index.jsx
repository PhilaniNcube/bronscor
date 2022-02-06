import React, { Fragment } from 'react';
import ProductsGrid from '../../components/Products/ProductsGrid';
import ProductsHero from '../../components/Products/ProductsHero';
import { getCategories, getProducts } from '../../lib';

const products = ({ products, categories }) => {
  return (
    <Fragment>
      <ProductsHero />
      <ProductsGrid products={products} categories={categories} />
    </Fragment>
  );
};

export default products;

export async function getStaticProps() {
  const products = await getProducts();

  const categories = await getCategories();

  return {
    props: { products, categories },
  };
}
