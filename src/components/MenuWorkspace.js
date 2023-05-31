import React from 'react';

import { Menu } from '@mui/material';
import MenuWorkspaceChangeName from './MenuWorkspaceChangeName';
import MenuWorkspaceNewWorkspace from './MenuWorkspaceNewWorkspace';
import MenuWorkspaceSettings from './MenuWorkspaceSettings';
import MenuWorkspaceShareWorkspace from './MenuWorkspaceShareWorkspace';
import SnackbarNotifications from './SnackbarNotifications';
import { withTranslation } from 'react-i18next';


/** */
const MenuWorkspace = ({ authenticated, anchorEl, handleClose, handleCallback, workspaceName, blobLink, t }) => {
  const open = Boolean(anchorEl);

  const snackRef = React.createRef();
  
  /** */
  const menuCallback = () => {
    snackRef.current.createWarning(t('tst_lgn_err'));
  }

  const changeName = <MenuWorkspaceChangeName handleCallback={handleCallback} workspaceName={workspaceName} authenticated={authenticated} menuCallback={menuCallback} />;
  const children = [changeName];

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      onClose={handleClose} >
      <MenuWorkspaceSettings
        children={children} />
      <MenuWorkspaceShareWorkspace
        blobLink={blobLink} 
        authenticated={authenticated} 
        menuCallback={menuCallback} />
      <MenuWorkspaceNewWorkspace />
      <SnackbarNotifications 
        ref={snackRef} />
    </Menu>
  );
}

export default withTranslation()(MenuWorkspace);
