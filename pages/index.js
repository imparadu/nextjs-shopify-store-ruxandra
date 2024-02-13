// pages/index.js

import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

import { callShopify, AllProducts } from '../helpers/shopify';

const Home = ({ products }) => {
  const [data, setData] = useState();
  console.log(products);
  useEffect(() => {
    const fetchData = async () => await callShopify(AllProducts);
    const response = fetchData();
    console.log('response=', response);
  }, []);
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="font-bold leading-tight text-palette-primary text-5xl mt-4 py-2 sm:py-4">
          Your Home, Reimagined, salut
        </h1>
        <p className="px-2 text-lg text-gray-600">
          Reimagine your living room with our sofas and chairs.
        </p>
      </div>
      <div className="max-w-7xl flex flex-wrap mx-auto px-6 pt-10">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.node.id}
              product={product}
            />
          );
        })}
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
