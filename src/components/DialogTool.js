import React from 'react';

import { Dialog, DialogContent,Grid, List, ListItemButton, ListItemText } from '@mui/material';
import DialogToolTemplateDemo from './DialogToolTemplateDemo';
import { withTranslation } from 'react-i18next';

/** */
const DialogTool = ({ isOpen, isPos, handleClose = null, noClose = false, handleLogin = null, authenticated = false, setPos, t }) => {

  const content = [
    t('controller_dialog_demo')
  ];

  /** */
  const DialogControllerContent = ({ value }) => {
    switch (value) {
      default:
        return <DialogToolTemplateDemo/>;
    }
  }

  /** */
  const handleClick = (event, index) => {
    setPos(index);
  }

  return (
    <Dialog
      open={isOpen}
      maxWidth='lg'
      onClose={ !noClose ? handleClose :  null } >
      <DialogContent 
        style={{ 
          padding: '0' 
        }} >
        <Grid 
          container 
          spacing={2}
          style={{ 
            margin: '0', 
            width: '100%' 
          }} >
          <Grid 
            item 
            xs={3} 
            style={{ 
              backgroundColor: '#555555', 
              textAlign: 'left', 
              padding: '0' 
            }} >
            <List 
              style={{ 
                minHeight: '750px',
                padding: '0' 
              }} >
              {content.map((value, index ) => (
                <ListItemButton
                  key={index} 
                  //disablePadding 
                  selected={ index === isPos } 
                  onClick={(event) => handleClick(event, index)}
                  style={{
                    padding: '8px 20px',
                    width: '100%'
                  }} >
                  <ListItemText 
                    primary={value} 
                    primaryTypographyProps={{ 
                      fontSize: '18px !important', 
                    }} /> 
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid 
            item 
            xs={9} 
            style={{ 
                padding: '0'
            }} >
            <Grid 
              container 
              direction="column" 
              sx={{ 
                height: '100%', 
                width: '100%', 
                padding: '10px', 
                display: 'flex',
                position: 'relative' 
              }} >
              <Grid 
                style={{ 
                  padding: '30px 50px 0 50px',
                  width: '100%', 
                  height: '100%',
                }}  >
                <DialogControllerContent value={isPos} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default withTranslation()(DialogTool);
