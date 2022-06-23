import React from 'react';
import { useSelector } from '../../redux';
import { Link } from 'react-router-dom';
import styles from './Auth.module.scss';
import { Navigate } from 'react-router-dom';
import * as routes from '../../constants/routes';

type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
};

function Auth({ children, footer }: Props) {
  const authError = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.app.user);

  return (
    <>
      {user && <Navigate to={routes.movies} />}
      <section className={styles.ironManBackground} />
      <div className={styles.container}>
        <div className={styles.main}>
          <span className={styles.back}>
            <Link to="/">back to the list</Link>
            {authError && (
              <div className={styles.errorExplanation}>{authError}</div>
            )}
            {children}
          </span>
        </div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </>
  );
}

export default Auth;
