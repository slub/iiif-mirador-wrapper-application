import React from "react";

import { Menu, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuAccountButtonLogin from "./MenuAccountButtonLogin";
import { withTranslation } from "react-i18next";

/** */
const MenuAccount = ({ authenticated, anchorEl, shibblink, handleClose, uuid }) => {
  const open = Boolean(anchorEl);

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
      <MenuAccountButtonLogin
        shibblink={shibblink}
        uuid={uuid}
        authenticated={authenticated} />
    </Menu>
  );
}

/** */
const NavbarButtonAccount = ({ authenticated, shibblink, uuid, t }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  /** */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /** */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip
        title={t('btn_usr')} >
        <IconButton
          variant="workspace"
          onClick={handleClick} >
          <PersonIcon
            sx={{ color: authenticated ? '#9ACD32 !important' : '#CC0000 !important' }}
            variant='menuLarge' />
        </IconButton>
      </Tooltip>
      <MenuAccount
        anchorEl={anchorEl}
        handleClose={handleClose}
        authenticated={authenticated}
        shibblink={shibblink}
        uuid={uuid} />
    </React.Fragment>
  )
}

export default withTranslation()(NavbarButtonAccount);
