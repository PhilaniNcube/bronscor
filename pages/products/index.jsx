import React, { Fragment } from 'react';
import ProductsHero from '../../components/Products/ProductsHero';
import ProductsGrid from '../../components/Products/ProductsGrid';
import {getCategories, getProducts, supabase} from '../../lib'


const Products = ({products, categories}) => {
  return (
    <Fragment>
          <ProductsHero />
          <ProductsGrid products={products} categories={categories} />
    </Fragment>
  );
};

export default Products;


export async function getStaticProps () {
  const categories = await getCategories()
  const products = await getProducts()

  const {data:steel, error} = await supabase.from("steel").select("*")

  return {
    props: {
      products:steel, categories
    }
  }
}
