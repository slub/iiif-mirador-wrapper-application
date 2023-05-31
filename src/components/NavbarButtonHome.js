import React from "react";

import { Tooltip } from "@mui/material";
import { Logo } from "../public/images/svg";
import { WebsiteButton } from "../styles/components/styledComponents";

/** */
const NavbarButtonHome = ({ attributes = null, className }) => {

  /** */
  const handleClick = () => {
    if (attributes) {
      if (attributes.href !== '') {
        window.open(attributes.href, attributes.target);
      }
    }
  }

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%'
      }} >
      <div
        id={attributes.id}
        style={{
          width: '100%',
          height: '100%'
        }} >

        <Tooltip title={attributes.title} >
          <WebsiteButton onClick={handleClick} >
            <div style={{ height: '40px', display: 'block' }}>
              <Logo />
            </div>
          </WebsiteButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default NavbarButtonHome;
