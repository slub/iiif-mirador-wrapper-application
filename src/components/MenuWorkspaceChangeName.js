import React from 'react';

import { ListItemText } from '@mui/material';
import DialogTemplateChangeName from './DialogTemplateChangeName';
import { ConditionalWrapper } from '../lib/renderingLogic';
import { ToolbarMenuSubItem, ToolbarMenuSubItemDisabled } from '../styles/components/styledComponents';
import { withTranslation } from 'react-i18next';

/** */
const MenuWorkspaceChangeName = ({ workspaceName, handleCallback, authenticated, menuCallback, t }) => {

  const [open, setOpen] = React.useState(false);

  /** */
  const handleClick = () => {
    authenticated
      ? setOpen(true)
      : menuCallback()
  }

  /** */
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <ConditionalWrapper
        condition={ authenticated }
        wrapperTrue={ children => 
          <ToolbarMenuSubItem
            tabIndex={-1}
            onClick={handleClick} >
            { children }
          </ToolbarMenuSubItem>    
        }
        wrapperFalse={ children => 
          <ToolbarMenuSubItemDisabled
            tabIndex={-1}
            onClick={handleClick} >
            { children }
          </ToolbarMenuSubItemDisabled>    
        } >
        
        <ListItemText>
          &#8288;{t('mn_fnct_nme')}
        </ListItemText>

      </ConditionalWrapper>
      <DialogTemplateChangeName
        isOpen={open}
        handleClose={handleClose}
        value={workspaceName}
        handleCallback={handleCallback} />
    </React.Fragment>
  );
}

export default withTranslation()(MenuWorkspaceChangeName);
