import React from 'react';

import DialogTextFieldEdit from './DialogTextFieldEdit';
import DialogActionName from './DialogActionName';
import DialogTemplateBasic from './DialogTemplateBasic';
import { withTranslation } from 'react-i18next';

/** */
const DialogTemplateChangeName = ({ value, isOpen, handleClose, handleCallback, t }) => {

  const [isEdit, setIsEdit] = React.useState(false);
  const [isReset, setIsReset] = React.useState(true);
  const [isValid, setIsValid] = React.useState(true);

  /* use ref to access child component*/
  const textFieldRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  /* pass callback function to update parent component */
  const callback = (value) => {
    if (isReset) {
      handleCallback(value);
      setIsReset(false);
    }
  }

  /** */
  const validateText = (valid) => {
    setIsValid(valid);
  }

  /** */
  const setReset = () => {
    setIsReset(true);
    setIsEdit(false);
  }

  /** */
  const handleSubmit = () => {
    /* trigger child function which triggers callback function */
    isEdit ? textFieldRef.current.updateTextFieldValue() : setIsEdit(true);
  }

  /** */
  const handleSubmitEnter = () => {
    buttonRef.current.handleClick();
  }
  
  /** */
  const onClose = () => {
    setReset();
    handleClose();
  }

  const textField = <DialogTextFieldEdit
    ref={textFieldRef}
    valMin={5}
    valMax={30}
    value={value}
    isEdit={isReset & isEdit}
    handleCallback={callback}
    handleSubmit={handleSubmitEnter}
    isValid={validateText} />

  const textAction = <DialogActionName
    ref={buttonRef}
    value={value}
    onClick={handleSubmit}
    handleReset={setReset}
    isValid={isValid} />

  return (
    <DialogTemplateBasic
      title={t('dlg_header')}
      text={t('dlg_tsr_short')}
      isOpen={isOpen}
      cancel={true}
      submit={true}
      handleClose={onClose}
      textField={textField}
      textFieldAction={textAction} />
  );
}

export default withTranslation()(DialogTemplateChangeName);
