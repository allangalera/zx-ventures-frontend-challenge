import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import * as styles from './styles';

import { RootState } from '@store/combineReducers';
import SearchBox from '@components/SearchBox';
import CartMenu from '@components/CartMenu';
import { changeTheme } from '@store/preferences/actions';
import Button from '@components/Button';
import { TiWeatherSunny, TiWeatherNight } from 'react-icons/ti';

const Header: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const { cartCounter, currentTheme } = useSelector((state: RootState) => {
    return {
      cartCounter: state.cart.counter,
      currentTheme: state.preferences.theme,
    };
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const handleChangeTheme = () => {
    dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <header css={styles.Header}>
        <div>
          <Link href="/" passHref>
            <a>AG ZX Challenge</a>
          </Link>
        </div>
        <div>{/* <SearchBox /> */}</div>
        <div css={styles.ButtonsContainer}>
          <Button small handleClick={handleChangeTheme}>
            {currentTheme === 'light' ? (
              <TiWeatherNight css={styles.ButtonIcon} />
            ) : (
              <TiWeatherSunny css={styles.ButtonIcon} />
            )}
          </Button>
          <Button small handleClick={() => setMenuOpen(!menuOpen)}>
            <div css={styles.CartButton}>
              <AiOutlineShoppingCart css={styles.ButtonIcon} />
              <span css={styles.CartCountBadge}>{cartCounter}</span>
            </div>
          </Button>
        </div>
      </header>
      <CartMenu visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
