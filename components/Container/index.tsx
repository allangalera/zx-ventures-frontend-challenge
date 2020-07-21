import React from 'react';
import * as styles from './styles';

type Props = {};

const Container: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  return <div css={styles.Container}>{children}</div>;
};

export default Container;
