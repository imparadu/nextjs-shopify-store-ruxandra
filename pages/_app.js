// pages/_app.js

import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await callShopify(allCollections);
  const portfolioCollection = get(response, [
    'data',
    'collections',
    'edges',
    '1',
  ]);
  const products = portfolioCollection.node.products.edges;

  return {
    props: {
      products,
    },
  };
}

export default MyApp;
