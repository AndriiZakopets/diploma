import React from 'react';
import { useSelector, useDispatch, actions } from '../redux';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import type { User } from '../../shared/types';
import styles from './UserHeading.module.scss';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 32,
      height: 32,
    },
    children: `${name[0].toUpperCase()}`,
  };
}

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
              <Avatar {...stringAvatar(user.username)} />
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
