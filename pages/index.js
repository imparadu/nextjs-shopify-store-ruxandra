// pages/index.js
import React from 'react';
import get from 'lodash/get';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import BackToTopButton from '@/components/BackToTopButton';
import Portfolio from './portfolio';
import { callShopify, allCollections } from '../helpers/shopify';

const Home  = ({ portfolioProducts }) => {
  return (
    <Fragment>
      { <div className="justify-center flex flex-col ">
        <div className="xxs:columns-1 xxs:mx-0 xs:columns-1 xs:mx-0 s:columns-2 md:columns-3 lg:columns-4 gap-0 mx-0">
          {portfolioProducts.map((product) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
        </div>
        <BackToTopButton />
      </div> }
     </Fragment>
  );
};

export async function getStaticProps() {
  const response = await callShopify(allCollections);
  const portfolioCollection = get(response, [
    'data',
    'collections',
    'edges',
    '0',
  ]);
  const portfolioProducts = portfolioCollection.node.products.edges;

  return {
    props: {
      portfolioProducts,
    },
  };
}

export default Home;
