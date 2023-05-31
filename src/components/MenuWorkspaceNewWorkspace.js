import React from 'react';

import { ListItemIcon, ListItemText } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { ToolbarMenuItem } from '../styles/components/styledComponents';
import { withTranslation } from 'react-i18next';

/** */
const MenuWorkspaceNewWorkspace = ({ t }) => {

  /** */
  const handleClick = () => {
    let url = window.location.href.split('#')[0];

    window.open(url, '_blank');
  }

  return (
    <ToolbarMenuItem
      tabIndex={-1}
      onClick={handleClick} >
          
      <ListItemIcon>
        <PlaylistAddIcon 
          fontSize="medium" 
          color='custom' />
      </ListItemIcon>
      <ListItemText>
        &#8288;{t('mn_nw_col')}
      </ListItemText>
        
    </ToolbarMenuItem>
  );
}

export default withTranslation()(MenuWorkspaceNewWorkspace);
