import { cn, formatPrice } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/common/hover-card';
import { ExtendedProduct } from '../types/extensions';
import useProductCart from '../hooks/use-product-cart';
import { ProductImage } from './product-image';

export const ProductGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'w-full h-full py-6 gap-x-6 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center',
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProductGridItem = (product: ExtendedProduct) => {
  const { name, price, slug, images } = product;
  const { addItem } = useProductCart();
  return (
    <>
      <div className='transition duration-200 space-y-4 flex flex-col max-w-[310px] h-full'>
        <div className='relative h-full w-full'>
          <Link
            href={`/products/${slug}` || '#'}
            className={cn('cursor-pointer h-full w-full')}
          >
            <ProductImage image={images[0]} alt={name} type='grid-item' />
          </Link>
        </div>
        <div className='text-sm space-y-1'>
          <div className='flex items-start justify-between gap-6'>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer uppercase'>
                {name}
              </HoverCardTrigger>
              <HoverCardContent>{name}</HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <PlusCircle
                  onClick={() => addItem(product)}
                  className='cursor-pointer hover:text-white hover:fill-black'
                />
              </HoverCardTrigger>
              <HoverCardContent>Add to cart</HoverCardContent>
            </HoverCard>
          </div>
          {price && <div>{formatPrice(price)}</div>}
        </div>
      </div>
    </>
  );
};
