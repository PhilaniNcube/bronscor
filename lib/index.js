import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async () => {
  const query = gql`
    query ProductQuery {
      productsConnection {
        edges {
          node {
            name
            slug
            id
            description
            image {
              url
              fileName
            }
            productCategory {
              title
              slug
            }
            productType {
              name
              slug
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
