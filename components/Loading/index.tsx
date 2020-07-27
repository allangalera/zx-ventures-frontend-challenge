import React from 'react';
import * as styles from './styles';
import { PuffLoader } from 'react-spinners';

const Loading: React.FunctionComponent = (): JSX.Element => {
  return (
    <div css={styles.Loading}>
      <PuffLoader />
    </div>
  );
};

export default Loading;
