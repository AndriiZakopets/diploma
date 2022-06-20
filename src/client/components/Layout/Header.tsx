import React from 'react';
import { useSelector } from 'react-redux';
import NavigationLink from '../NavigationLink';
import UserHeading from '../UserHeading';
import * as routes from '../../constants/routes';
import { RootState } from '../../redux';
import styles from './Layout.module.scss';

function Header() {
  const user = useSelector((state: RootState) => state.app.user);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavigationLink href={routes.movies} variant="text">
          Home
        </NavigationLink>
      </nav>
      {user === null ? (
        <div style={{ display: 'flex', gap: 8, marginRight: 8 }}>
          <NavigationLink href={routes.signUp}>Sign up</NavigationLink>
          <NavigationLink variant="text" href={routes.login}>
            Sign in
          </NavigationLink>
        </div>
      ) : (
        <UserHeading user={user} />
      )}
    </header>
  );
}

export default Header;
