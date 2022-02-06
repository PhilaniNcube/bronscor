import React, { Fragment } from 'react';
import CategoryHero from '../../components/Category/CategoryHero';
import { getCategory } from '../../lib';

const category = ({ category }) => {
  console.log(category);
  return (
    <Fragment>
      <CategoryHero category={category} />
    </Fragment>
  );
};

export default category;

export async function getServerSideProps({ params: { slug } }) {
  console.log(slug);
  const category = await getCategory(slug);

  return {
    props: { category },
  };
}
