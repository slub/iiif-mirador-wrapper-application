import React from 'react';

import { Box } from '@mui/material';
import { withTranslation } from 'react-i18next';

/** */
const DialogToolTemplateDemo = ({ t }) => {

  return (
    <React.Fragment>
      <Box sx={{ width: '100%', backgroundColor: '#FFFF00', color: '#000000' }}>
        <h1>Hier könnte ihre Werbung stehen!</h1>
      </Box>
        <Box>{t('dlg_tsr_large')}
      </Box>
    </React.Fragment>
  )
}

export default withTranslation()(DialogToolTemplateDemo);
