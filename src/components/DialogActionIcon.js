import React  from 'react';

import { Tooltip, IconButton } from '@mui/material';

/** */
const DialogActionIcon = ({ tooltip, handleClick, icon }) => {

  return (
    <Tooltip 
      title={tooltip} >
      <IconButton
        tabIndex={0}
        sx={{
          mt: 1,
          ml: 2
        }}
        onClick={handleClick} >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default DialogActionIcon;
