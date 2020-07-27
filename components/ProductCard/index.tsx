import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import * as styles from './styles';

import { RootState } from '@store/combineReducers';
import { addProduct, removeProduct } from '@store/cart/actions';
import { Product } from '@store/cart/types';
import ProductImage from '@components/ProductImage';
import Button from '@components/Button';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

type Props = {
  product: Product;
};

const ProductCard: React.FunctionComponent<Props> = ({ product }): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const [selectedPack, setSelectedPack] = useState(product.packs[1]);
  const [isPackAddedToCart, setIsPackAddedToCart] = useState(false);

  useEffect(() => {
    if (!selectedPack) return;

    let cartItem = cartItems[selectedPack.uuid];

    if (cartItem) setIsPackAddedToCart(true);
    else setIsPackAddedToCart(false);
  }, [selectedPack, cartItems]);

  const calculateDiscount = () => {
    return (1 - selectedPack.current_price / selectedPack.original_price) * 100;
  };

  const handleAddToCart = () => {
    let productToAdd = {
      product: product,
      pack: selectedPack,
    };
    dispatch(addProduct(productToAdd));
  };

  const handleRemoveFromCart = () => {
    let productToAdd = {
      product: product,
      pack: selectedPack,
    };
    dispatch(removeProduct(productToAdd));
  };

  return (
    <div css={styles.ProductCard}>
      <Link href="produto/[slug]" as={`/produto/${product.slug}`} passHref>
        <a css={styles.ProductCardImageContainer}>
          <ProductImage src={product.image} alt={product.name} />
        </a>
      </Link>
      {calculateDiscount() >= 16 && (
        <div css={styles.ProductCardDiscountBadge}>
          <span>
            {calculateDiscount().toLocaleString('pt-BR', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            })}
            %
          </span>
        </div>
      )}
      <div css={styles.ProductInfoContainer}>
        <b>{product.vendors[0].vendor.name}</b>
        <p>{product.name}</p>
      </div>
      <p>Escolha seu pack:</p>
      <div css={styles.PackSelectorContainer}>
        {product.packs.map(item => {
          return (
            <Button key={item.uuid} active={selectedPack.uuid === item.uuid} handleClick={() => setSelectedPack(item)}>
              {item.unities} UNID.
            </Button>
          );
        })}
      </div>
      <div css={styles.FlexBetweenContainer}>
        <div css={styles.PackInfo}>
          <b>DESC: </b>
          {calculateDiscount().toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
          })}
          %
        </div>
        <div css={styles.PackInfo}>
          <b>DE: </b>
          {selectedPack.original_price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <div css={styles.PackInfo}>
          <b>POR: </b>
          {selectedPack.current_price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      </div>
      <div css={styles.FlexBetweenContainer}>
        {isPackAddedToCart ? (
          <>
            <Button handleClick={handleRemoveFromCart}>
              <AiOutlineMinus css={styles.ButtonIcon} />
            </Button>
            <span>{cartItems[selectedPack.uuid]?.quantity}</span>
            <Button handleClick={handleAddToCart}>
              <AiOutlinePlus css={styles.ButtonIcon} />
            </Button>
          </>
        ) : (
          <Button fill handleClick={handleAddToCart}>
            ADDICIONAR AO CARRINHO
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
