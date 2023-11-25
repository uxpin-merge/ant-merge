import React, { FC } from 'react';
import { Card as CardM, CardProps } from 'flowbite-react';

const Card: FC = (props: CardProps) => {
  return <CardM {...props} />
}

export default Card;
