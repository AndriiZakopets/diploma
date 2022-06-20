import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Button from '@mui/material/Button';

type Props = {
  children: string;
  href: string;
  variant?: 'text' | 'outlined' | 'contained';
};

function NavigationLink({ children, href, variant = 'contained' }: Props) {
  const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (props, ref) => <RouterLink ref={ref} to={href} {...props} />
  );

  return (
    <Button
      style={{ color: 'white' }}
      variant={variant}
      component={LinkBehavior}
    >
      {children}
    </Button>
  );
}

export default NavigationLink;
