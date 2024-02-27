import React from 'react';
import get from 'lodash/get';
import ProductCard from '@/components/ProductCard';
import BackToTopButton from '@/components/BackToTopButton';
import { callShopify, allCollections } from '@/helpers/shopify';

function Sketchbook({ sketchbookProducts }) {
  return (
    <>
      <div className="justify-center flex flex-col">
        <div className="xxs:columns-1 xs:columns-1 s:columns-2 md:columns-3 lg:columns-4 gap-0 mx-0">
          {sketchbookProducts.map((product) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
        </div>
        <BackToTopButton />
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
