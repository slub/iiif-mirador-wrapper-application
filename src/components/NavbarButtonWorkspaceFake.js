import React from 'react';

import { LockOpen } from '@mui/icons-material';
import { Box, Tooltip, Button } from '@mui/material';
import { withTranslation } from 'react-i18next';

/** */
const NavbarButtonWorkspaceFake = ({ handleClick, t }) => {

  return (
    <Tooltip
      title={t('btn_tsr')} >
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
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              height: '32px',
              cursor: 'pointer'
            }} >
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
                <LockOpen />
              </Box>
              <Box style={{ width: '50px', fontSize: '20px' }} > [ ... ] </Box>
            </Box>
          </Box>
        </Box>
      </Button>
    </Tooltip>
  );
}

export default withTranslation()(NavbarButtonWorkspaceFake);
