import React, { useImperativeHandle } from 'react';

import Check from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import DialogActionIcon from './DialogActionIcon';
import { withTranslation } from 'react-i18next';

/** */
const DialogActionName = React.forwardRef(({ onClick, handleReset, isValid, t }, ref) => {

  const edit = <EditIcon />;
  const save = <SaveIcon />;
  const check = <Check />;
  const cancel = <CancelIcon />;

  const editTooltip = t('tf_nme_btn_edit');
  const saveTooltip = t('tf_nme_btn_save');
  const checkTooltip = t('tf_nme_btn_suc');
  const canceltTooltip = t('tf_nme_btn_err');

  const [isEdit, setIsEdit] = React.useState(false);
  const [isIcon, setIsIcon] = React.useState(edit);
  const [isTooltip, setIsTooltip] = React.useState(editTooltip);
  const timer = React.useRef();

  /** */
  const setEdit = () => {
    setIsEdit(true)
    setIsIcon(save);
    setIsTooltip(saveTooltip);
    onClick();
  };

  /** */
  const setSave = () => {
    clearTimeout(timer.current);
    if (isValid) {
      setIsIcon(check);
      setIsTooltip(checkTooltip);
      onClick();
      timer.current = window.setTimeout(() => {
        setIsIcon(edit);
        setIsTooltip(editTooltip);
        setIsEdit(false);
        handleReset();
      }, 2000);
    } else {
      setIsIcon(cancel);
      setIsTooltip(canceltTooltip);
      timer.current = window.setTimeout(() => {
        setIsIcon(save);
        setIsTooltip(saveTooltip);
      }, 2000);
    }

  };

  /** */
  const handleClick = () => {
    isEdit ? setSave() : setEdit();
  };

  useImperativeHandle(ref, () => ({
    handleClick
  }));

  return (
    <DialogActionIcon
      tooltip={isTooltip}
      icon={isIcon}
      handleClick={handleClick} />
  );
});

export default withTranslation(null, { withRef: true })(DialogActionName);
