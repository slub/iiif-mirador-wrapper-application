import React from 'react';

import { Lock, LockOpen } from '@mui/icons-material';
import { Box, Tooltip, Button } from '@mui/material';
import NavbarButtonWorkspaceReload from './NavbarButtonWorkspaceReload';
import MenuWorkspace from './MenuWorkspace';
import { ConditionalWrapper } from '../lib/renderingLogic';
import { withTranslation } from 'react-i18next';

/** */
const NavbarButtonWorkspace = ({ authenticated, synching, handleSync, workspaceName, blobLink, handleCallback, t }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hoverSynch, setHoverSynch] = React.useState(false);

  /** */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /** */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /** */
  const onHover = (hover) => {
    setHoverSynch(hover);
  };

  /** */
  const someStyle = {
    backgroundColor: '#CC0000',
    height: '32px',
  };

  /** */
  const someStyleHover = {
    backgroundColor: '#8e0000',
    height: '32px',
  };

  return (
    <React.Fragment>
      <ConditionalWrapper
        condition={authenticated}
        wrapperTrue={children =>
          <Box
            borderRadius="16px"
            display="flex"
            style={hoverSynch ? someStyleHover : someStyle} >
            {children}
            <NavbarButtonWorkspaceReload
              onHover={onHover}
              synching={synching}
              handleSync={handleSync} />
          </Box>
        }
        wrapperFalse={children => children} >

        <Tooltip
          title={t('btn_col')} >
          <Button
            style={{
              padding: '0',
              minWidth: '0',
              minHeight: '0',
              textTransform: 'none',
              letterSpacing: '0',
              lineHeight: '32px',
              color: '#FFFFFF'
            }}
            onClick={handleClick} >
            <Box
              borderRadius="16px"
              style={{
                backgroundColor: '#424242'
              }} >
              <Box
                borderRadius="16px"
                sx={
                  authenticated
                    ? {
                      backgroundColor: '#9ACD32',
                      height: '32px',
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: [0.8]
                      }
                    }
                    : {
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      height: '32px',
                      cursor: 'pointer'
                    }
                } >
                <Box
                  style={{
                    display: 'flex',
                    marginLeft: '10px',
                    marginRight: '15px',

                  }} >
                  <Box
                    style={{
                      float: 'left',
                      paddingRight: '20px',
                      paddingTop: '3px',
                      height: '29px'
                    }} >
                    {
                      authenticated
                        ? <Lock />
                        : <LockOpen />
                    }
                  </Box>
                  <Box>
                    {workspaceName}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Button>
        </Tooltip>

      </ConditionalWrapper>
      <MenuWorkspace
        anchorEl={anchorEl}
        handleClose={handleClose}
        authenticated={authenticated}
        handleCallback={handleCallback}
        workspaceName={workspaceName}
        blobLink={blobLink} />
    </React.Fragment>
  );
}

export default withTranslation()(NavbarButtonWorkspace);
