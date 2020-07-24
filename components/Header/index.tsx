import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as styles from './styles';

import { RootState } from '@store/combineReducers';
import SearchBox from '@components/SearchBox';

const Header: React.FunctionComponent = (): JSX.Element => {
  const cartCounter = useSelector((state: RootState) => state.cart.counter);

  return (
    <header css={styles.Header}>
      <div>AG ZX Challenge</div>
      <div>
        <SearchBox />
      </div>
      <div>
        <AiOutlineShoppingCart />
        {cartCounter}
      </div>
    </header>
  );
};

export default Header;
