import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as styles from './styles';

import SearchBox from '@components/SearchBox';

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header css={styles.Header}>
      <div>AG ZX Challenge</div>
      <div>
        <SearchBox />
      </div>
      <div>
        <AiOutlineShoppingCart />
      </div>
    </header>
  );
};

export default Header;
