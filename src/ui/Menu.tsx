import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const MenuRoot = styled.nav({
  display: 'flex',
  gap: '2rem',
});

const Menu = (inProps: PropsWithChildren) => {
  const { children } = inProps;

  return <MenuRoot>{children}</MenuRoot>;
};

export { default as MenuItem } from './MenuItem';
export default Menu;
