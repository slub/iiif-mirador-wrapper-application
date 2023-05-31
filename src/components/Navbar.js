import React from "react";

import {
  AppBar,
  Toolbar,
  Box
} from "@mui/material";
import NavbarButtonHome from "./NavbarButtonHome";
import NavbarButtonHelp from "./NavbarButtonHelp";
import NavbarButtonBookmark from "./NavbarButtonBookmark";
import NavbarButtonAccount from "./NavbarButtonAccount";
import NavbarButtonWorkspace from "./NavbarButtonWorkspace";
import NavbarButtonWorkspaceFake from "./NavbarButtonWorkspaceFake";
import { ConditionalRender } from "../lib/renderingLogic";

/** */
const Navbar = ({ mainMenuSettings, blobLink, handleCallback, authenticated, workspaceName, shareLink, handleNameChange, synching, handleSync, menuId, uuid, shareWorkspace, openTeaser }) => {
  const workspaceButton = <NavbarButtonWorkspace
    authenticated={authenticated ? authenticated : false}
    workspaceName={workspaceName}
    blobLink={shareLink}
    handleCallback={handleNameChange}
    synching={synching}
    handleSync={handleSync} />;

  const workspaceButtonFake = <NavbarButtonWorkspaceFake
    handleClick={openTeaser} />;

  return (
    <AppBar 
      variant="workspace" 
      id={menuId} 
      position="static" >

      <Toolbar 
        variant="workspace" >
        <Box 
          sx={{ flexGrow: 1 }} >
          {
            mainMenuSettings.userLogo.enabled
            ? <NavbarButtonHome {...mainMenuSettings.userLogo} />
            : null
          }
        </Box>
        <Box 
          sx={{ flexGrow: 2 }} />
        <Box 
          sx={{ 
            flexGrow: 0, 
            display: { 
              xs: 'flex' 
            } 
          }} >
          <ConditionalRender
            condition={shareWorkspace !== null}
            renderTrue={workspaceButton}
            renderFalse={workspaceButtonFake}
            />
        </Box>
        <Box 
          sx={{ flexGrow: 1 }} />
        <Box 
          sx={{ flexGrow: 0 }} >
          <NavbarButtonBookmark blobLink={blobLink} callback={handleCallback} />
          <NavbarButtonHelp openTeaser={openTeaser} />
          {
            mainMenuSettings.userButtons.login.enabled
            ? <NavbarButtonAccount uuid={uuid} authenticated={authenticated ? authenticated : false} shibblink={mainMenuSettings.userButtons.login.attributes} />
            : null
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
