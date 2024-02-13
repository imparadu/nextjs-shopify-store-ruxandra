// pages/index.js

import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

import { callShopify, AllProducts } from '../helpers/shopify';

const Home = ({ products }) => {
  // const [data, setData] = useState();
  // console.log(products);
  // useEffect(() => {
  //   const fetchData = async () => await callShopify(AllProducts);
  //   const response = fetchData();
  //   console.log('response=', response);
  // }, []);
  return (
    <Fragment>
      <div className="justify-center flex">
        <div className="columns-4 gap-0 max-w-9/10">
          {products.map((product) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const response = await callShopify(AllProducts);
  const products = response.data.products.edges;

  return {
    props: {
      products,
    },
  };
}

export default Home;
