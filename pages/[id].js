import { useRouter } from 'next/router';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];
  // Add more paths dynamically based on your data source

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific product using params.id
  const res = await fetch(`https://example.com/api/products/${params.id}`);
  const product = await res.json();

  return { props: { product }, revalidate: 1 };
}

export default ProductPage;
