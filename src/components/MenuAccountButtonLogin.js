import React from "react";

import { ListItemIcon, ListItemText } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToolbarMenuItem } from "../styles/components/styledComponents";
import { withTranslation } from "react-i18next";

/** */
const MenuAccountButtonLogin = ({ authenticated, shibblink, uuid, t }) => {
    /** */
  const handleClick = () => {
    var hrefWithHash = shibblink.href + uuid;
    window.open(hrefWithHash, shibblink.target);
  }

  return (
    <ToolbarMenuItem
      tabIndex={0}
      onClick={handleClick} >

      <ListItemIcon>
        {
          authenticated
          ? <LogoutIcon color='custom' />
          : <LoginIcon color='custom' />
        }
      </ListItemIcon>
      <ListItemText>
        {
          authenticated
          ? t('mn_lgt')
          : t('mn_lgn')
        }
      </ListItemText>
        
    </ToolbarMenuItem>
  );
}

export default withTranslation()(MenuAccountButtonLogin);
