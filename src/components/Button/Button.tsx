import React, { FC } from 'react';
import { Button as ButtonM, ButtonProps } from 'flowbite-react';

const Button: FC = (props: ButtonProps) => {
  return <ButtonM {...props} />
}

export default Button;
