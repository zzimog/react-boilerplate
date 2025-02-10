import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';
import styled from '@emotion/styled';
import clsx from 'clsx';

type MenuItem = {
  to: string;
} & PropsWithChildren;

const MenuItemRoot = styled.div({
  [`& a`]: {
    color: 'inherit',
    textDecoration: 'none',

    [`&:hover`]: {
      textDecoration: 'underline',
    },

    [`&.active`]: {
      background: 'yellow',
    },
  },
});

const MenuItem = (inProps: MenuItem) => {
  const { to, children } = inProps;

  return (
    <MenuItemRoot>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          clsx({
            active: isActive,
            pending: isPending,
          })
        }
      >
        {children}
      </NavLink>
    </MenuItemRoot>
  );
};

export default MenuItem;
