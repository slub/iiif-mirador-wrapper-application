import React from 'react';

import { CustomTextField } from '../styles/components/styledComponents';
import { withTranslation } from 'react-i18next';

/** */
const DialogTextFieldDisabled = ({ value, t }) => {

  return (
    <CustomTextField
      label={t('tf_bmk_lb')}
      size="small"
      style={{ width: '90%' }}
      value={value}
      disabled />
  );
}

export default withTranslation()(DialogTextFieldDisabled);
