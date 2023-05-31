import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { Close } from '@mui/icons-material';

/** */
const DialogTemplateBasic = ({ isOpen, handleClose, title, text, textField, textFieldAction }) => {

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby={title && 'dialog-title'}
      aria-describedby={text && 'dialog-text'}
      //disableEnforceFocus
      //disableAutoFocus
      tabIndex={-1} >
      {
        title
        ? <DialogTitle 
            style={{ 
                fontSize: '1.5em', 
                padding: '30px 30px' 
            }}
            id='dialog-title' >
            {title}
          </DialogTitle>
        : <></>
      }
      <DialogContent
        tabIndex={-1}
        style={{ 
          whiteSpace: "pre-line", 
          padding: "0 30px 30px  30px"  
        }} >
        {
          text
          ? <DialogContentText
              id='dialog-text' 
              color='custom' 
              variant='dialogText' >
              {text}
            </DialogContentText>
          : <></>
        }
        {textField}
        {textFieldAction}
      </DialogContent>
      <Close
        tabIndex={-1}
        style={{
          position: 'absolute',
          right: '0',
          top: '0'
        }}
        onClick={handleClose} />
    </Dialog>
  );
}

export default DialogTemplateBasic;
