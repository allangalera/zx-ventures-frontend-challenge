import React, { useState } from 'react';
import * as styles from './styles';
import { FiCameraOff } from 'react-icons/fi';
import { Interpolation } from '@emotion/core';
import merge from 'lodash/merge';

type Props = {
  src: string;
  alt: string;
  small?: boolean;
};

const ProductGallery: React.FunctionComponent<Props> = ({ src, alt, small = false }): JSX.Element => {
  const [hasError, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return (
    <>
      {hasError ? (
        <div
          css={(theme: any): Interpolation => {
            let style = styles.ProductImageNotFound(theme);

            if (small) merge(style, styles.ProductImageNotFoundSmall(theme));

            return style;
          }}
        >
          <FiCameraOff />
          <span>Produto Sem Imagem</span>
        </div>
      ) : (
        <img css={styles.ProductCardImage} src={src} alt={alt} onError={onError} draggable="false" />
      )}
    </>
  );
};

export default ProductGallery;
