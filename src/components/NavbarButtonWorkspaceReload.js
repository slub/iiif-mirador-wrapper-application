import React from 'react';

import CachedIcon from '@mui/icons-material/Cached';
import { Box, Tooltip, Button } from '@mui/material';
import LoadingSpinner from '../styles/animations/loadingSpinner';
import { withTranslation } from 'react-i18next';

/** */
const NavbarButtonWorkspaceReload = ({ synching, onHover, handleSync, t }) => {

  /** */
  const setHoverTrue = () => {
    onHover(true);
  }

  /** */
  const setHoverFalse = () => {
    onHover(false);
  }

  /** */
  const handleClick = () => {
    handleSync();
  };

  return (
    <Tooltip 
      title={t('btn_snc')} >
      <Button
        style={{
          padding: '0',
          minWidth: '0',
          minHeight: '0',
          textTransform: 'none',
          color: '#FFFFFF'
        }}
        onClick={
          () => {
            if (!synching) {
              handleClick();
            }
          }
        }
        >
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            width: '34px',
            paddingLeft: '3px',
            paddingRight: '6px'
          }}
          onMouseOver={setHoverTrue}
          onMouseLeave={setHoverFalse} >
          {
            synching 
            ? <LoadingSpinner /> 
            : <CachedIcon style={{ cursor: 'pointer' }} />
          }
        </Box>
      </Button>
    </Tooltip>
  );
}

export default withTranslation()(NavbarButtonWorkspaceReload);
