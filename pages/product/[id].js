import { useRouter } from 'next/router';
import { callShopify, createProductQuery } from '@/helpers/shopify';
import { pathToString } from '@/helpers/pathToString';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState();
  const { id } = router.query;
  const productId = pathToString(id);

  const getProduct = async () => {
    try {
      const product = await callShopify(createProductQuery, { id: productId });
      setProduct(product);
    } catch (error) {
      throw new Error(error);
    }
  };
  console.log(product);

  useEffect(() => {
    if (productId) {
      getProduct(productId);
    }
  }, [productId]);
  return (
    <div>
      <h1>{product?.data?.product?.description}</h1>

      {/* <p>{product.description}</p> */}
    </div>
  );
};

export default ProductPage;

export async function getProductG(id) {}
