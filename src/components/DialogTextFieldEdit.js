import React, { useImperativeHandle } from 'react';

import { CustomTextField } from '../styles/components/styledComponents';
import { withTranslation } from 'react-i18next';

/* pass reference to access child by parent */
const DialogTextFieldEdit = React.forwardRef(({ value, valMin, isEdit, valMax, handleCallback, isValid, handleSubmit, t }, ref) => {

  const [textFieldValue, setTextFieldValue] = React.useState(value);
  const [textFieldState, setTextFieldState] = React.useState(false);
  const [helperTextValue, setHelperTextValue] = React.useState(null);

  const inputRef = React.useRef(null);

  const helperTextMin = t('tf_nme_err_min');
  const helperTextMax = t('tf_nme_err_max');

  React.useEffect(() => {
    if (value.length > valMax) {
      setHelperTextValue(helperTextMax);
      setTextFieldState(true);
      isValid(false);
    } else if (value.length < valMin) {
      setHelperTextValue(helperTextMin);
      setTextFieldState(true);
      isValid(false);
    }
    setTextFieldValue(value);
  }, [value]);

  React.useEffect(() => {
    if(isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useImperativeHandle(ref, () => ({
    updateTextFieldValue() {
      handleCallback(textFieldValue);
    }
  }));

  /** */
  const handleChange = (e) => {
    //setTextFieldValue(e.target.value.replace(/[^a-zA-Z0-9\s\.\:\-\[\]\_\(\)]/g, ''));
    setTextFieldValue(e.target.value);
    if (e.target.value.length < valMin) {
      setHelperTextValue(helperTextMin);
      setTextFieldState(true);
      isValid(false);
    } else if (e.target.value.length > valMax) {
      setHelperTextValue(helperTextMax);
      setTextFieldState(true);
      isValid(false);
    } else {
      setTextFieldState(false);
      isValid(true);
    }
  }

  /** */
  const keyPress = (e) => {
    if(e.keyCode == 13) {
      handleSubmit();
    }
  }

  return (
    <CustomTextField
      id='text-field'
      label={t('tf_nme_lb')}
      value={textFieldValue}
      style={{ width: '87%' }}
      inputProps={{ maxLength: valMax + 1 }}
      onChange={handleChange}
      onKeyDown={keyPress}
      helperText={textFieldState && helperTextValue}
      error={textFieldState}
      disabled={!isEdit}
      inputRef={inputRef}
      autoComplete='off'
      tabIndex={-1} />
  );
});

export default withTranslation(null, { withRef: true })(DialogTextFieldEdit);
