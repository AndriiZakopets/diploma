import { useLocation, matchPath } from 'react-router-dom';
import * as routes from '../../constants/routes';
import React from 'react';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const location = useLocation();
  console.log();
  const isAuthRoute = React.useMemo(() => {
    return (
      matchPath(routes.login, location.pathname) !== null ||
      matchPath(routes.signUp, location.pathname) !== null
    );
  }, [location]);

  return (
    <>
      {isAuthRoute === false && <Header />}
      {children}
    </>
  );
}

export default Layout;
