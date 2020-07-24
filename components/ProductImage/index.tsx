import React, { useState } from 'react';
import * as styles from './styles';
import { FiCameraOff } from 'react-icons/fi';

type Props = {
  src: string;
  alt: string;
};

const ProductGallery: React.FunctionComponent<Props> = ({ src, alt }): JSX.Element => {
  const [hasError, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return (
    <>
      {hasError ? (
        <div css={styles.ProductImageNotFound}>
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
