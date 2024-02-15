// pages/index.js
import get from 'lodash/get';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

import { callShopify, AllProducts, Portfolio } from '../helpers/shopify';

const Home = ({ products }) => {
  
  return (
    <Fragment>
      <div className="justify-center flex">
        <div className="columns-4 gap-0 max-w-9/10">
          {products.map((product) => {
            return <ProductCard key={product.node.id} product={product} asd={'asdasd'}/>;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const response = await callShopify(AllProducts);
  const products = get(response, ['data', 'products', 'edges']);
  const image = products.map(element => {
    const url = element.node.images.edges[0].node.url
    // console.log(url)
  })
  return {
    props: {
      products,
    },
  };
}

export default Home;
