import React from "react";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IconButton, Tooltip } from "@mui/material";
import { withTranslation } from "react-i18next";

/** */
const NavbarButtonHelp = ({ openTeaser, t }) => {

  return (
    <Tooltip title={t('btn_hlp')} >
      <IconButton
        variant="workspace"
        onClick={() => openTeaser({ pos: 0 })} >
        <QuestionMarkIcon variant='menuLarge' />
      </IconButton>
    </Tooltip>
  );
}

export default withTranslation()(NavbarButtonHelp);
