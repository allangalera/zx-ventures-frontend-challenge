import React from 'react';
import * as styles from './styles';

const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <footer css={styles.Footer}>
      © Copyright 2020-{new Date().getFullYear()} allangalera.com - All Rights Reserved
    </footer>
  );
};

export default Footer;
