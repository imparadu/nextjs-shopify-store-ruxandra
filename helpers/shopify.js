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
    console.log(data.data.cartCreate)
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Could not fetch products!');
  }
}

export async function addToCart(variant, quantity) {
  const createCartMutation = gql`
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
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
  const variables = {
    cartInput: {
      lines: [
        {
          quantity: parseInt(quantity),
          merchandiseId: variant,
        },
      ],
    },
  };
  //if(counter === 0){try creatercart}
  // else try additem
  try {
    console.log('calling shopify', 'variant= ', variant);
    const asd = await callShopify(createCartMutation, variables);
    // console.log(asd)
return asd
    // return await callShopify(createCartMutation, variables);
  } catch (error) {
    throw new Error(error);
  }
}

const gql = String.raw;

export const createCartMutation = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
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
  }
`;

export const createProductQuery = gql`
  query getMyProduct($id: ID!)
  {
    product(id: $id) {
      description
      handle
      images(first: 10) {
        nodes {
          url
          width
          height
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
          }
        }
      }
      title
    }
  }`;
