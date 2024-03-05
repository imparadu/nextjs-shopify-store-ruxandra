import { useRouter } from 'next/router';
import { callShopify, shopCollection } from '@/helpers/shopify';
import get from 'lodash/get';

const ProductPage = ({ shopProducts }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { path } = router.query;
  console.log(shopProducts);
  return (
    <div>
      <h1>{}</h1>

      {/* <p>{product.description}</p> */}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [{ params: { id: '1' } }];
  // Add more paths dynamically based on your data source

  return { paths, fallback: true };
}

export async function getStaticProps() {
  const response = await callShopify(shopCollection);
  const shopProducts = get(response, [
    'data',
    'collection',
    'products',
    'edges',
  ]);
  const productPrice = shopProducts[0].node.priceRange;
  // console.log('product price 33', productPrice);

  return {
    props: {
      shopProducts,
    },
  };
}

export default ProductPage;
