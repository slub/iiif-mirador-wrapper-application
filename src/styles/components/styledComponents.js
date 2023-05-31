import { TextField, Button, MenuItem, Link } from '@mui/material';
import { styled } from '@mui/material/styles';


/** */
const CustomTextField = styled(TextField)({
  '& label': {
    color: '#FFFFFF',
  },
  '& label.Mui-focused': {
    color: '#FFFFFF',
  },
  '& label.Mui-error': {
    color: '#CC0000'
  },
  '& label.Mui-disabled': {
    color: '#FFFFFF'
  },
  '& input.Mui-disabled': {
    WebkitTextFillColor: '#FFFFFF'
  },
  '& input': {
    WebkitTextFillColor: '#FFFFFF',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#FFFFFF',
      },
    },
    '&.Mui-disabled:hover': {
      '& .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#FFFFFF',
      },
    },
    '&.Mui-error:hover': {
      '& .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#CC0000',
      },
    },
    '& fieldset': {
      borderColor: '#FFFFFF',
    },
    '&.Mui-disabled fieldset': {
      borderColor: '#FFFFFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFFFFF',
    },
    '&.Mui-error fieldset': {
      borderColor: '#CC0000',
    },
  },
});

/** */
const CustomLink = styled(Link)({
  color: '#CC0000',
  textDecorationColor: '#CC0000'
});

/** */
const PrimaryButton = styled(Button)({
  lineHeight: '25px !important',
  color: '#FFFFFF !important',
  padding: '6px 16px !important',
  margin: '9px !important',
  borderRadius: '4px !important',
  backgroundColor: '#CC0000 !important',
  '&:hover': {
    backgroundColor: 'rgb(124, 0, 0) !important'
  },
  ':disabled': {
    backgroundColor: 'rgb(124, 0, 0) !important',
  }
});

/** */
const WebsiteButton = styled(Button)({
  padding: '0 !important',
  height: '100% !important',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08) !important'
  }
});

/** */
const ToolbarMenuItem = styled(MenuItem)({
  padding: '8px 16px !important',
  display: 'flex !important'
});

/** */
const ToolbarMenuItemDisabled = styled(MenuItem)({
  padding: '8px 16px !important',
  display: 'flex !important',
  color: '#A1A1A1 !important',
  cursor: 'not-allowed !important'
});

/** */
const ToolbarMenuSubItem = styled(MenuItem)({
  padding: '8px 16px 8px 70px !important',
  width: '100%'
});

/** */
const ToolbarMenuSubItemDisabled = styled(MenuItem)({
  width: '100%',
  padding: '8px 16px 8px 70px !important',
  color: '#A1A1A1 !important',
  cursor: 'not-allowed !important'
});

export { CustomTextField, CustomLink, PrimaryButton, WebsiteButton, ToolbarMenuItem, ToolbarMenuItemDisabled, ToolbarMenuSubItem, ToolbarMenuSubItemDisabled };
