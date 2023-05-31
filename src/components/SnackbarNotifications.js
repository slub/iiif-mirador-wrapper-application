import React, { useImperativeHandle } from 'react';

import { useSnackbar } from 'notistack';
import { withTranslation } from 'react-i18next';

/** */
const SnackbarNotifications = React.forwardRef(({ message, t }, ref) => {

  const { enqueueSnackbar } = useSnackbar();

  const optionsDefault = {
    variant: 'default',
    autoHideDuration: 3000
  }
  const optionsSuccess = {
    variant: 'success',
    autoHideDuration: 3000
  }

  const optionsInfo = {
    variant: 'info',
    autoHideDuration: 3000
  }
  const optionsWarning = {
    variant: 'warning',
    autoHideDuration: 3000
  }

  const optionsError = {
    variant: 'error',
    autoHideDuration: 3000
  }

  /** */
  const createDefault = (message) => {
    enqueueSnackbar(t(message), optionsDefault);
  }

  /** */
  const createError = (message) => {
    enqueueSnackbar(t(message), optionsError);
  }

  /** */
  const createSuccess = (message) => {
    enqueueSnackbar(t(message), optionsSuccess);
  }

  /** */
  const createInfo = (message) => {
    enqueueSnackbar(t(message), optionsInfo);
  }

  /** */
  const createWarning = (message) => {
    enqueueSnackbar(t(message), optionsWarning);
  }

  useImperativeHandle(ref, () => ({
    createDefault,
    createError,
    createInfo,
    createSuccess,
    createWarning
  }));

  return (
    <></>
  );
});

export default withTranslation(null, { withRef: true })(SnackbarNotifications);
