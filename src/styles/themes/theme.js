import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  typography: {
    fontFamily: ['Source Sans Pro']
  },
  palette: {
    primary: {
      main: '#424242'
    },
    secondary: {
      main: '#CC0000'
    },
    custom: {
      dark: '#CC0000',
      light: '#707070'
    },
    action: {
      active: '#FFFFFF'
    }
  },
  components: {
    MuiAppBar: {
      variants: [
        {
          props: { variant: 'workspace' },
          style: {
            height: '44px',
            backgroundColor: '#424242 !important'
          }
        }
      ]
    },
    MuiToolbar: {
      variants: [
        {
          props: { variant: 'workspace' },
          style: {
            minHeight: '44px',
            paddingLeft: '0 !important',
            paddingRight: '15px !important'
          }
        }
      ]
    },
    MuiButtonBase: {
      variants: [
        {
          props: { variant: 'workspace' },
          style: {
            padding: '7px !important'
          }
        }
      ]
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { variant: 'menuLarge' },
          style: {
            color: '#FFFFFF !important',
            fontSize: '30px !important'
          }
        }
      ]
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          marginTop: '0 !important'
        }
      }
    },
    MuiCard: {
      variants: [
        {
          props: { variant: 'workspaceChip' },
          style: {
            backgroundColor: '#ffffffB3 !important'
          }
        }
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'dialogText' },
          style: {
            paddingBottom: '30px !important'
          }
        }
      ]
    }
  }
});
