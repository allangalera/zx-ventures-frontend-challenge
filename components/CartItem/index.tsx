import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import * as styles from './styles';

import { addProduct, removeProduct } from '@store/cart/actions';
import { CartItem as CartItemType } from '@store/cart/types';
import ProductImage from '@components/ProductImage';

type Props = {
  cartItem: CartItemType;
};

const CartItem: React.FunctionComponent<Props> = ({ cartItem }): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let productToAdd = {
      product: cartItem.product,
      pack: cartItem.pack,
    };
    dispatch(addProduct(productToAdd));
  };

  const handleRemoveFromCart = () => {
    let productToAdd = {
      product: cartItem.product,
      pack: cartItem.pack,
    };
    dispatch(removeProduct(productToAdd));
  };

  return (
    <div css={styles.CartItem}>
      <Link href="produto/[slug]" as={`/produto/${cartItem.product.slug}`} passHref>
        <a css={styles.CartItemImageContainer}>
          <ProductImage small src={cartItem.product.image} alt={cartItem.product.name} />
        </a>
      </Link>
      <div css={styles.CartItemName}>
        <h1>{cartItem.product.name}</h1>
      </div>
      <div>
        <div>
          {cartItem.pack.current_price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <div>
          {cartItem.pack.original_price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      </div>
      <div css={styles.CartItemButtonsContainer}>
        <button onClick={handleRemoveFromCart}>-</button>
        {cartItem.quantity}
        <button onClick={handleAddToCart}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
