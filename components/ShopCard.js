// components/productcard.js
import get from 'lodash/get';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/helpers/shopify';
import { split } from 'lodash';

const ProductCard = ({ product }) => {
  const id = product.node.id;
  // const handle = product.node.handle;
  const title = product.node.title;
  const imageNode = product.node.images.nodes[0];
  // console.log(imageNode)
  const price = product.node.priceRange.maxVariantPrice.amount.replace(
    /\.0/g,
    ''
  );
  const currency = product.node.priceRange.maxVariantPrice.currencyCode;
  const productVariant = product.node.variants.edges[0].node.id;
  const productId = id.split('/')[4];

  return (
    <div className="overflow-hidden  m-2 bg-slate-100">
      <Link href={`/product/${productId}`} key={`${productId}`} passHref>
        <Image
          alt=""
          src={imageNode.url}
          width={imageNode.width}
          height={imageNode.height}
          className="p-2"
        />
      </Link>
      <div>
        <p className="text-center text-l font-semibold mx-4 mt-4 mb-1">
          {title}
        </p>
        <p className="text-center text-gray-700 mb-4">
          {price} {currency}
        </p>
        <p className="text-center text-gray-700 mb-4">{id}</p>
        <p className="text-center">
          <button onClick={() => addToCart(productVariant, 1)}>
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
