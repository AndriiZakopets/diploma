import React from 'react';
import { useSelector } from '../../redux';
import NavigationLink from '../NavigationLink';
import UserHeading from '../UserHeading';
import * as routes from '../../constants/routes';
import styles from './Layout.module.scss';

function Header() {
  const user = useSelector((state) => state.app.user);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavigationLink href={routes.movies} variant="text">
          Home
        </NavigationLink>
      </nav>
      {user ? (
        <UserHeading user={user} />
      ) : (
        <div style={{ display: 'flex', gap: 8, marginRight: 8 }}>
          <NavigationLink href={routes.signUp}>Sign up</NavigationLink>
          <NavigationLink variant="text" href={routes.login}>
            Sign in
          </NavigationLink>
        </div>
      )}
    </header>
  );
}

export default Header;
