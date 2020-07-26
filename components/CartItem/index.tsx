import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import * as styles from './styles';

import { addProduct, removeProduct } from '@store/cart/actions';
import { CartItem as CartItemType } from '@store/cart/types';
import ProductImage from '@components/ProductImage';
import Button from '@components/Button';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type Props = {
  cartItem: CartItemType;
};

const CartItem: React.FunctionComponent<Props> = ({ cartItem }): JSX.Element => {
  const dispatch = useDispatch();

  const calculateDiscount = () => {
    return (1 - cartItem.pack.current_price / cartItem.pack.original_price) * 100;
  };

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
          {calculateDiscount() >= 16 && (
            <div css={styles.CartItemDiscountBadge}>
              <span>
                {calculateDiscount().toLocaleString('pt-BR', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 1,
                })}
                %
              </span>
            </div>
          )}
        </a>
      </Link>
      <div css={styles.InfoContainer}>
        <div css={styles.CartItemName}>
          <h1>
            {cartItem.product.name} - {cartItem.pack.unities} Unidades
          </h1>
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
            <b>PREÇO: </b>
            {cartItem.pack.current_price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </div>
        <div css={styles.FlexBetweenContainer}>
          <div css={styles.ButtonsContainer}>
            <Button small handleClick={handleRemoveFromCart}>
              <AiOutlineMinus css={styles.IconSize} />
            </Button>
            <span>{cartItem.quantity}</span>
            <Button small handleClick={handleAddToCart}>
              <AiOutlinePlus css={styles.IconSize} />
            </Button>
          </div>
          <div css={styles.Total}>
            <b>TOTAL: </b>
            {(cartItem.quantity * cartItem.pack.current_price).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
