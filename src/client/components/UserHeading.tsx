import React from 'react';
import { useDispatch, actions } from '../redux';
import UserAvatar from './UserAvatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import type { User } from '../../shared/types';
import styles from './UserHeading.module.scss';

type Props = {
  user: User;
};

function UserHeading({ user }: Props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <div {...bindTrigger(popupState)} className={styles.avatar}>
              <UserAvatar username={user.username} />
            </div>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  dispatch(actions.auth.logout());
                  popupState.close();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
}

export default UserHeading;
