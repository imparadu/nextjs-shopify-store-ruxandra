import React from 'react';
import ProductCard from '@/components/ProductCard';
import { callShopify, queryPortfolio } from '@/helpers/shopify';

function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      {/* <div className="justify-center flex">
        <div className="columns-4 gap-0 max-w-9/10">
          {products.map((product) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  const response = await callShopify(queryPortfolio);
  console.log(response.data.collection.products.edges);
  //   const products = response.data.products.edges;

  return {
    props: {
      //   products,
    },
  };
}

export default Portfolio;
