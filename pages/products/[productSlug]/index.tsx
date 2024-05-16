import Head from '@/components/layout/head';
import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { Product } from '@/features/products/components/product';
import useProduct from '@/features/products/hooks/use-product';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import useCategory from '@/features/categories/hooks/use-category';

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const router = useRouter();
  const slug = router?.query?.productSlug;
  const { product, isCheckedProduct } = useProduct(slug);
  const { category: relatedProducts } = useCategory(product?.category?.slug);

  return isCheckedProduct && relatedProducts ? (
    <Page>
      <Head
        title={product?.name}
        description={product?.description}
        image={product?.images && product?.images[0]?.url}
      />
      {product ? (
        <Product product={product} />
      ) : (
        <div className='p-6'>No product found</div>
      )}
      <Header title='Related products' />
      <ProductGrid>
        {relatedProducts?.products
          // ?.filter((product) => product.id !== product.id) // TODO: filter out current product
          ?.map((product) => (
            <ProductGridItem key={product?.id} {...product} />
          ))}
      </ProductGrid>
    </Page>
  ) : (
    <PageLoader />
  );
};

export default ProductPage;
