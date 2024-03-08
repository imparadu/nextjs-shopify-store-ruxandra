import React from 'react';
import get from 'lodash/get';
import ProductCard from '@/components/ProductCard';
import BackToTopButton from '@/components/BackToTopButton';
import { callShopify, allCollections } from '@/helpers/shopify';

function Portfolio({ portfolioProducts }) {
  return (
    <>
      <div className="justify-center flex flex-col ">
        <div className="xxs:columns-1 xxs:mx-0 xs:columns-1 xs:mx-0 s:columns-2 md:columns-3 lg:columns-4 gap-0 mx-0">
          {portfolioProducts.map((product) => {
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
  const portfolioCollection = get(response, [
    'data',
    'collections',
    'edges',
    '0',
  ]);
  const portfolioProducts = portfolioCollection.node.products.edges;
  const images = portfolioProducts[0].node.images.nodes;
  // console.log('in portfolio');
  return {
    props: {
      portfolioProducts,
    },
  };
}

export default Portfolio;
