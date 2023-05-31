import React from 'react';

import { ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { ToolbarMenuItem } from '../styles/components/styledComponents';
import { withTranslation } from 'react-i18next';

/** */
const MenuWorkspaceSettings = ({ children, t }) => {

  const [open, setOpen] = React.useState(false);

  /** */
  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <ToolbarMenuItem
        tabIndex={0}
        onClick={handleClick}
        divider={open}>

        <ListItemIcon >
          <SettingsIcon
            color='custom' />
        </ListItemIcon>
        <ListItemText>
          &#8288;{t('mn_stng')}
        </ListItemText>

        {
          open
            ? <ExpandLess />
            : <ExpandMore />
        }
      </ToolbarMenuItem>
      {open && children}
    </React.Fragment>
  );
}

export default withTranslation()(MenuWorkspaceSettings);
