import React from 'react';
import get from 'lodash/get';
import ProductCard from '@/components/ProductCard';
import { callShopify, allCollections } from '@/helpers/shopify';

function Sketchbook({ sketchbookProducts }) {
  return (
    <>
      <div className="justify-center flex">
        <div className="columns-4 gap-0 max-w-9/10">
          {sketchbookProducts.map((product) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await callShopify(allCollections);
  const sketchbookCollection = get(response, [
    'data',
    'collections',
    'edges',
    '1',
  ]);
  const sketchbookProducts = sketchbookCollection.node.products.edges;
  const images = sketchbookProducts[0].node.images.nodes;

  return {
    props: {
      sketchbookProducts,
    },
  };
}

export default Sketchbook;
