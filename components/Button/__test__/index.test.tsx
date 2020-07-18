import React from 'react';
import { render, fireEvent } from '@test/setup';
import Button from '@components/Button';

describe('Button component', () => {
  const defaultProps = {
    handleClick: jest.fn(),
    text: 'Button Label',
  };

  it('matches snapshot', () => {
    const { asFragment } = render(<Button {...defaultProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('click triggers', () => {
    const { getByText } = render(<Button {...defaultProps} />, {});
    fireEvent.click(getByText(defaultProps.text));
    expect(defaultProps.handleClick).toBeCalled();
  });
});
