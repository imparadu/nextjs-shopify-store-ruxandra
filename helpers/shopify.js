// helpers/shopify.js

// import { GraphQLClient } from "graphql-request";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN;

export async function callShopify(query, variables = {}) {
  const fetchUrl = `https://${domain}.myshopify.com/api/2024-01/graphql.json`;
  const fetchOptions = {
    endpoint: fetchUrl,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Could not fetch products!');
  }
}

export async function addToCart() {
  const numericVariantId = '9034792534343'; // Your numeric product variant ID
  const encodedVariantId = btoa(
    `gid://shopify/ProductVariant/${numericVariantId}`
  );
  console.log(encodedVariantId); // Use this encoded ID in your GraphQL mutation
  //   const createCartMutation = gql`
  //   mutation createCart {
  //     cartCreate(
  //       input: {
  //       lines: [
  //         {
  //           quantity: 1,
  //           merchandiseId: "gid://shopify/Product/9034790863175",
  //         },
  //       ],
  //     })
  //     {
  //       cart {
  //         id
  //         createdAt
  //         updatedAt
  //         lines(first: 5) {
  //           edges {
  //             node {
  //               id
  //               merchandise {
  //                 ... on ProductVariant {
  //                   id
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;
  // const variables = {
  //   cartInput: {
  //     lines: [
  //       {
  //         quantity: parseInt(quantity),
  //         merchandiseId: id,
  //       },
  //     ],
  //   },
  // };
  try {
    console.log('calling shopify');
    return await callShopify(createCartMutation);
  } catch (error) {
    throw new Error(error);
  }
}

const gql = String.raw;

export const createCartMutation = gql`
  mutation MyMutation {
    cartCreate(
      input: {
        lines: [{
          merchandiseId: "gid://shopify/ProductVariant/49058297512263"
          quantity: 1
        }]
      }
    ) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 5) {
          edges {
            node {
              merchandise {
                ... on ProductVariant {
                  product {
                    title
                  }
                }
              }
              quantity
            }
          }
        }
      }
    }
  }
`;

export const allCollections = gql`
  query MyQuery {
    collections(first: 2) {
      edges {
        node {
          products(first: 10) {
            edges {
              node {
                handle
                id
                images(first: 1) {
                  nodes {
                    height
                    width
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const shopCollection = gql`
  {
    collection(id: "gid://shopify/Collection/619467899207") {
      title
      products(first: 10) {
        edges {
          node {
            id
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            description
            images(first: 2) {
              nodes {
                id
                height
                width
                url
              }
            }
            descriptionHtml
            title
            handle
            variants(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`
;
