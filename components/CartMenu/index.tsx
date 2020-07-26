import React, { useEffect } from 'react';
import { animated, useTransition } from 'react-spring';
import * as styles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@store/combineReducers';
import CartItem from '@components/CartItem';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '@components/Button';

type Props = {
  visible: boolean;
  onClose: (ev: React.MouseEvent<any>) => void;
};

const CartMenu: React.FunctionComponent<Props> = ({ visible, onClose }): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const overlatAnimation = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 180,
    },
  });
  const menuAnimation = useTransition(visible, null, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%' },
    config: {
      duration: 180,
    },
  });

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [visible]);

  const getTotal = () => {
    let total = 0;

    Object.keys(cartItems).map(index => {
      total += cartItems[index].quantity * cartItems[index].pack.current_price;
    });

    return total.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  };

  return (
    <>
      {overlatAnimation.map(
        ({ item, key, props }) =>
          item && <animated.div key={key} style={props} css={styles.CartMenuOverlay} onClick={onClose}></animated.div>,
      )}
      {menuAnimation.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} css={styles.CartMenu}>
              <div css={styles.TitleContainer}>
                <h1 css={styles.Title}>Carrinho</h1>
                <Button small handleClick={onClose}>
                  <AiOutlineClose css={styles.IconSize} />
                </Button>
              </div>
              <div css={styles.CartMenuContainer}>
                {Object.keys(cartItems).map(index => {
                  return <CartItem key={cartItems[index].pack.uuid} cartItem={cartItems[index]} />;
                })}
              </div>
              <div>
                <b>TOTAL: </b>
                {getTotal()}
              </div>
            </animated.div>
          ),
      )}
    </>
  );
};

export default CartMenu;
