// helpers/shopify.js

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

const gql = String.raw;

export const AllProducts = gql`
  query Products {
    products(first: 22) {
      edges {
        node {
          id
          title
          handle
          images(first: 10) {
            edges {
              node {
                url
                width
                height
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;
export const queryPortfolio = gql`
  query MyQuery {
    collection(id: "gid://shopify/Collection/617744597319") {
      title
      handle
      products(first: 10) {
        edges {
          node {
            id
            handle
            images(first: 1) {
              edges {
                node {
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
`;
