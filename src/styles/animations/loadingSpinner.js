import React from 'react';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';


/** */
const LoadingSpinner = () => {

  return (
    <React.Fragment>
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          marginLeft: '3px'
        }}
        size={20}
        thickness={6}
        value={100} />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#727272' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          marginLeft: '3px',
          cursor: 'wait',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={20}
        thickness={6} />
    </React.Fragment>
  );
}

export default LoadingSpinner;
