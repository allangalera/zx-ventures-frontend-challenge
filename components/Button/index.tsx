import React from 'react';
import * as styles from './styles';

type Props = {
  text: string;
  handleClick: Function;
};

const Button: React.FunctionComponent<Props> = ({ text, handleClick }): JSX.Element => {
  const onClick = () => {
    console.log('aqui');
    handleClick();
  };
  return (
    <button css={styles.Button} onClick={onClick}>
      <span css={styles.ButtonSpan}>{text}</span>
    </button>
  );
};

export default Button;
