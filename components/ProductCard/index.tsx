import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './styles';

import { RootState } from '@store/combineReducers';
import { addProduct, removeProduct } from '@store/cart/actions';
import { Product } from '@store/cart/types';
import ProductImage from '@components/ProductImage';

type Props = {
  product: Product;
};

const ProductCard: React.FunctionComponent<Props> = ({ product }): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);
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
      <div css={styles.ProductCardImageContainer}>
        <ProductImage src={product.image} alt={product.name} />
      </div>
      <div css={styles.ProductCardDiscountBadge}>
        <span>{calculateDiscount().toFixed(1)}%</span>
      </div>
      <h1>{product.vendors[0].vendor.name}</h1>
      <h1>{product.name}</h1>
      <div>
        {product.packs.map((item, index) => {
          return (
            <button key={item.uuid} onClick={() => setSelectedPack(item)}>
              {item.unities}
            </button>
          );
        })}
      </div>
      <div>
        <div>{selectedPack.current_price}</div>
        <div>{selectedPack.original_price}</div>
      </div>
      <div>
        {isPackAddedToCart ? (
          <>
            <button onClick={handleRemoveFromCart}>-</button>
            {cartItems[selectedPack.uuid]?.quantity}
            <button onClick={handleAddToCart}>+</button>
          </>
        ) : (
          <button onClick={handleAddToCart}>ADDICIONAR AO CARRINHO</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
