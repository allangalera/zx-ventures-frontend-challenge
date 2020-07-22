import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './styles';

import { actions } from '@redux/cart';

type Props = {
  name: string;
  vendors: Array<any>;
  image: string;
  packs: Array<any>;
};

const ProductCard: React.FunctionComponent<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [selectedPack, setSelectedPack] = useState(props.packs[0]);

  const calculateDiscount = () => {
    return (1 - selectedPack.current_price / selectedPack.original_price) * 100;
  };

  const handleAddToCart = () => {
    console.log(selectedPack);
    dispatch(actions.addItem(selectedPack));
  };

  return (
    <div css={styles.ProductCard}>
      <div css={styles.ProductCardImageContainer}>
        <img css={styles.ProductCardImage} src={props.image} alt={props.descrition}></img>
      </div>
      <div css={styles.ProductCardDiscountBadge}>
        <span>{calculateDiscount().toFixed(1)}%</span>
      </div>
      <h1>{props.vendors[0].vendor.name}</h1>
      <h1>{props.name}</h1>
      <div>
        {props.packs.map((item, index) => {
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
        <button onClick={handleAddToCart}>ADDICIONAR AO CARRINHO</button>
      </div>
    </div>
  );
};

export default ProductCard;
