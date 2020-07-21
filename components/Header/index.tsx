import React from 'react';
import * as styles from './styles';

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header css={styles.Header}>
      <div>menu</div>
      <div>Header</div>
      <div>search box</div>
      <div>cart icon</div>
      <div>user icon</div>
    </header>
  );
};

export default Header;
