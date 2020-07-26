import React from 'react';
import * as styles from './styles';
import { Interpolation } from '@emotion/core';
import merge from 'lodash/merge';

type Props = {
  active?: boolean;
  fill?: boolean;
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FunctionComponent<Props> = ({
  active = false,
  fill = false,
  handleClick,
  children,
}): JSX.Element => {
  return (
    <button
      css={(theme: any): Interpolation => {
        let style = styles.Button(theme);

        if (active) merge(style, styles.ButtonActive(theme));
        if (fill) merge(style, styles.ButtonFill(theme));

        return style;
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
