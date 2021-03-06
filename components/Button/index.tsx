import React from 'react';
import * as styles from './styles';
import { Interpolation } from '@emotion/core';
import merge from 'lodash/merge';

type Props = {
  active?: boolean;
  fill?: boolean;
  small?: boolean;
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FunctionComponent<Props> = ({
  active = false,
  fill = false,
  small = false,
  handleClick,
  children,
}): JSX.Element => {
  return (
    <button
      css={(theme: any): Interpolation => {
        let style = styles.Button(theme);

        if (active) merge(style, styles.ButtonActive(theme));
        if (fill) merge(style, styles.ButtonFill(theme));
        if (small) merge(style, styles.ButtonSmall(theme));

        return style;
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
