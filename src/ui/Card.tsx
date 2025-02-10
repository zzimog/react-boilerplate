import { ElementType, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

type CardProps = {
  as?: ElementType;
} & PropsWithChildren;

const CardRoot = styled.div({
  padding: '1.5rem 2rem',
  borderRadius: '0.5rem',
  background: '#fff',
  boxShadow: '1px 2px 4px 0 #ccc',
});

const Card = (inProps: CardProps) => {
  const { as, children } = inProps;

  return <CardRoot as={as}>{children}</CardRoot>;
};

export default Card;
