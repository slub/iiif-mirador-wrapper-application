import React from 'react';

import DialogTextFieldDisabled from './DialogTextFieldDisabled';
import DialogActionCopy from './DialogActionCopy';
import DialogTemplateBasic from './DialogTemplateBasic';
import { withTranslation } from 'react-i18next';

/** */
const DialogTemplateShareCollection = ({ value, isOpen, handleClose, t }) => {

  const textField = <DialogTextFieldDisabled value={value} />;
  const textAction = <DialogActionCopy value={value} />;

  return (
    <DialogTemplateBasic
      title={t('dlg_header')}
      text={t('dlg_tsr_short')}
      isOpen={isOpen}
      handleClose={handleClose}
      textField={textField}
      textFieldAction={textAction} />
  );
}

export default withTranslation()(DialogTemplateShareCollection);
