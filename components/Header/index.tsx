import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import * as styles from './styles';

import { RootState } from '@store/combineReducers';
import SearchBox from '@components/SearchBox';
import CartMenu from '@components/CartMenu';

const Header: React.FunctionComponent = (): JSX.Element => {
  const cartCounter = useSelector((state: RootState) => state.cart.counter);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header css={styles.Header}>
        <div>
          <Link href="/" passHref>
            <a>AG ZX Challenge</a>
          </Link>
        </div>
        <div>
          <SearchBox />
        </div>
        <div>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <AiOutlineShoppingCart />
            {cartCounter}
          </div>
        </div>
      </header>
      <CartMenu visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
