import React from 'react';
import * as styles from './styles';

import ProductCard from '@components/ProductCard';

type Props = {
  products: Array<any>;
};

const ProductGallery: React.FunctionComponent<Props> = ({ products }): JSX.Element => {
  return (
    <div css={styles.ProductGallery}>
      {products.map(item => (
        <ProductCard key={item.uuid} {...item} />
      ))}
    </div>
  );
};

export default ProductGallery;
