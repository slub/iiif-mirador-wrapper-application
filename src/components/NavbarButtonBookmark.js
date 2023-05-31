import React from "react";

import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { IconButton, Tooltip } from "@mui/material";
import DialogTemplateShareCollection from "./DialogTemplateShareCollection";
import { withTranslation } from "react-i18next";

/** */
const NavbarButtonBookmark = ({ blobLink, callback, t }) => {

  const [dialogOpen, setDialogOpen] = React.useState(false);

  /** */
  const handleClose = () => {
    setDialogOpen(false);
  }

  /** */
  const handleClick = () => {
    setDialogOpen(true);
    callback();
  }

  return (
    <React.Fragment>
      <Tooltip
        title={t('btn_bmk')} >
        <IconButton
          variant="workspace"
          onClick={handleClick} >
          <ContentPasteIcon
            variant='menuLarge' />
        </IconButton>
      </Tooltip>
      <DialogTemplateShareCollection
        isOpen={dialogOpen}
        handleClose={handleClose}
        value={blobLink} />
    </React.Fragment>
  );
}

export default withTranslation()(NavbarButtonBookmark);
