import React from 'react';
import * as styles from './styles';

type Props = {
  size?: number;
};

const Spacer: React.FunctionComponent<Props> = ({ size = 8 }): JSX.Element => {
  return (
    <div
      css={theme => {
        return styles.Spacer(theme, size);
      }}
    ></div>
  );
};

export default Spacer;
