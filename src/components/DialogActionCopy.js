import React from 'react';

import { ContentCopy } from '@mui/icons-material';
import Check from '@mui/icons-material/Check';
import DialogActionIcon from './DialogActionIcon';
import { withTranslation } from 'react-i18next';

/** */
const DialogActionCopy = ({ value, t }) => {

  const copyTooltip = t('tf_bmk_btn_copy');
  const checkTooltip = t('tf_bmk_btn_suc');

  const copy = <ContentCopy />;
  const check = <Check />;

  const [isTooltip, setIsTooltip] = React.useState(copyTooltip);
  const [isIcon, setIsIcon] = React.useState(copy);
  const timer = React.useRef();

  /** */
  const handleClick = () => {
    clearTimeout(timer.current);
    setIsIcon(check);
    setIsTooltip(checkTooltip);
    navigator.clipboard.writeText(value);
    timer.current = window.setTimeout(() => {
      setIsIcon(copy);
      setIsTooltip(copyTooltip);
    }, 2000);
  }

  return (
    <DialogActionIcon
      tooltip={isTooltip}
      icon={isIcon}
      handleClick={handleClick} />
  );
}

export default withTranslation()(DialogActionCopy);
