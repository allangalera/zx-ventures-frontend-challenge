import React from 'react';

import { Global } from '@emotion/core';
import * as styles from './styles';
import Header from '@components/Header';
import Footer from '@components/Footer';

const LDefault: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Global styles={styles.GlobalStyle} />
      <div css={styles.LDefault}>
        <Header />
        <main css={styles.LDefaultMain}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LDefault;
