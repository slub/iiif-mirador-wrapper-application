import React from 'react';

import { ListItemIcon, ListItemText } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DialogTemplateShareWorkspace from './DialogTemplateShareWorkspace';
import { ConditionalWrapper } from '../lib/renderingLogic';
import { ToolbarMenuItem, ToolbarMenuItemDisabled } from '../styles/components/styledComponents';
import { withTranslation } from 'react-i18next';

/** */
const MenuWorkspaceShareWorkspace = ({ blobLink, authenticated, menuCallback, t }) => {

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
        condition={authenticated}
        wrapperTrue={children =>
          <ToolbarMenuItem
            tabIndex={-1}
            onClick={handleClick} >
            {children}
          </ToolbarMenuItem>
        }
        wrapperFalse={children =>
          <ToolbarMenuItemDisabled
            tabIndex={-1}
            onClick={handleClick} >
            {children}
          </ToolbarMenuItemDisabled>
        } >

        <ListItemIcon >
          {
            authenticated
              ? <ShareIcon
                color='custom' />
              : <ShareIcon
                style={{ color: '#A1A1A1' }} />
          }
        </ListItemIcon>
        <ListItemText>
          &#8288;{t('mn_lnk_col')}
        </ListItemText>

      </ConditionalWrapper>
      <DialogTemplateShareWorkspace
        isOpen={open}
        handleClose={handleClose}
        value={blobLink} />
    </React.Fragment>
  );
}

export default withTranslation()(MenuWorkspaceShareWorkspace);
