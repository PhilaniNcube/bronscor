import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async () => {
  const query = gql`
    query ProductQuery {
      productsConnection {
        edges {
          node {
            id
            dimensions
            shape
            productCategory {
              title
              slug
            }
            productType {
              name
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log('result: ', result);

  return result.productsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query CategoryQuery {
      productCategoriesConnection {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log('result: ', result);

  return result.productCategoriesConnection.edges;
};

export const getCategory = async (slug) => {
  const query = gql`
    query GetCategory($slug: String!) {
      productCategory(where: { slug: $slug }) {
        id
        title
        description {
          raw
        }
        products {
          id
          name
          slug
          description
          image {
            id
            fileName
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  console.log('result: ', result);

  return result.productCategory;
};

export const getCastings = async () => {
  const query = gql`
    query CastingQuery {
      castingsConnection {
        edges {
          node {
            id
            name
            slug
            image {
              id
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.castingsConnection.edges;
};

export const get3dPrinted = async () => {
  const query = gql`
    query ThreeDPrinted {
      three_d_printsConnection {
        edges {
          node {
            id
            name
            image {
              id
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.three_d_printsConnection.edges;
};
