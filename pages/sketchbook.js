import React from 'react';
import get from 'lodash/get';
import ProductCard from '@/components/ProductCard';
import { callShopify, allCollections } from '@/helpers/shopify';

function Sketchbook({ sketchbookProducts }) {
  return (
    <>
      <div className="justify-center flex">
        <div className="columns-4 gap-0 max-w-9/10">
          {portfolioProducts.map((product) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await callShopify(allCollections);
  const portfolioCollection = get(response, [
    'data',
    'collections',
    'edges',
    '0',
  ]);
  const sketchbookCollection = get(response, [
    'data',
    'collections',
    'edges',
    '1',
  ]);
  const portfolioProducts = portfolioCollection.node.products.edges;
  const sketchbookProducts = sketchbookCollection.node.products.edges;
  const images = portfolioProducts[0].node.images.nodes;
  console.log(
    'portfolioCollection =',
    portfolioCollection,
    'portfolioProducts=',
    portfolioProducts,
    'images = ',
    images
  );
  //   const products = response.data.products.edges;

  return {
    props: {
      portfolioProducts,
      sketchbookProducts,
    },
  };
}

export default Portfolio;
