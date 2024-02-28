import React from 'react';
import get from 'lodash/get';
import ShopCard from '@/components/ShopCard';
import BackToTopButton from '@/components/BackToTopButton';
import { callShopify, shopCollection } from '@/helpers/shopify';

function Shop({ shopProducts }) {
  return (
    <>
      {/* <div>shop</div> */}
      <div className="justify-center flex flex-col ">
        <div className="xxs:columns-1 xxs:mx-0 xs:columns-1 xs:mx-0 s:columns-2 md:columns-3 lg:columns-4 gap-0 mx-0">
          {shopProducts.map((product) => {
            return <ShopCard key={product.node.id} product={product} />;
          })}
        </div>
        <BackToTopButton />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await callShopify(shopCollection);
  const shopProducts = get(response, [
    'data',
    'collection',
    'products',
    'edges',
  ]);
  //   const shopProducts = getShopCollection;
  const productPrice = shopProducts[0].node;
  console.log(productPrice);
  //   const images = portfolioProducts[0].node.images.nodes;

  return {
    props: {
      shopProducts,
    },
  };
}

export default Shop;
