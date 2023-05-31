import React from 'react';

import { Box, Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { CustomLink } from '../styles/components/styledComponents';

/** */
const Section = ({ children, minSpacing = false, noSpacing = false, bottom = false }) => {
  return (
    <Grid style={
      minSpacing 
      ? ( bottom
        ? { marginBottom: '1rem', whiteSpace: "pre-line", wordWrap: "break-word",  bottom: 0 }
        : { marginBottom: '1rem', whiteSpace: "pre-line", wordWrap: "break-word" }
      ) 
      : ( noSpacing 
        ? ( bottom 
          ? { marginBottom: 0, whiteSpace: "pre-line", wordWrap: "break-word", bottom: 0 }
          : { marginBottom: 0, whiteSpace: "pre-line", wordWrap: "break-word" }
        )
        : ( bottom
          ? { marginBottom: '2rem', whiteSpace: "pre-line", wordWrap: "break-word",  bottom: 0 }
          : { marginBottom: '2rem', whiteSpace: "pre-line", wordWrap: "break-word" }
        )
      )} >
      { children }
    </Grid>
  );
}

/** */
const Paragraph = ({ children, noSpacing = false }) => {
  return (
    <Grid style={ noSpacing ? { margin: '0 2rem' } : { margin: '1rem 2rem' }} >
      { children }
    </Grid>
  );
}


/** */
const GridRow = ({ children, style } ) => {
  return (
    <Box style={style}>
      { children }
    </Box> 
  );
}

/** */
const Title = ({ icon = null, iconPos = 0, title }) => {
  const text = <Grid style={{ fontSize: '3rem', display: 'inline', margin: '0 20px' }} >{title}</Grid>;
  const iconTitle = <Grid style={{ display: "inline-block", position: "relative", width: '80px', height: '4rem' }} >{icon}</Grid>;

  return (
    <Grid>
      { 
        icon
        ? ( iconPos==0
          ? <React.Fragment>{iconTitle} {text}</React.Fragment>
          : <React.Fragment>{text} {iconTitle}</React.Fragment>
        )
        : text
      }
    </Grid>
  );
}

/** */
const Image = ({ image, label, style }) => {
  return (
    <Grid 
      role="img" 
      aria-label={label}
      style={style} >
      { image }
    </Grid>
  );
}

/** */
const Grid2Column = ({ colPos = 0, column_0, column_1 }) => {
  return (
    <Grid container >
      <Grid 
        item 
        xs={ colPos==0 ? 6 : ( colPos==1 ? 8 : 4 ) }
        style={{ 
            paddingRight: '1rem'
        }} >
        { column_0 }
      </Grid>
      <Grid 
        item 
        xs={ colPos==0 ? 6 : ( colPos==1 ? 4 : 8 ) } 
        style={{
            paddingLeft: '1rem'
        }} >
        { column_1 }
      </Grid>
    </Grid>
  );
}

/** */
const Grid3Column = ({ column_0, column_1, column_2 }) => {
  return (
    <Grid container >
      <Grid 
        item 
        xs={4} 
        style={{ 
          paddingRight: '1rem' 
        }} >
        { column_0 }
      </Grid>
      <Grid 
        item 
        xs={4} 
        style={{ 
          padding: '0 0.5rem' 
        }} >
        { column_1 }
      </Grid>
      <Grid 
        item 
        xs={4} 
        style={{ 
          paddingLeft: '1rem' 
        }} >
        { column_2 }
      </Grid>
    </Grid>
  );
}

/** */
const GridWithIcon =({ colPos = 0, column_0, column_1 }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={ colPos==0 ? 1 : 11 }
        style={ colPos==0 ?  { } : { padding: '0 1rem', textAlign: 'end' }} >
        { column_0 }
      </Grid>
      <Grid
        item
        xs={ colPos==0 ? 11 : 1 }
        style={ colPos==0 ? { padding: '0 1rem' } : { padding: '0 1rem', textAlign: 'end' }} >
        { column_1 }
      </Grid>
    </Grid>
  )
}

/** */
const Link = ({ extern = false, href, target = "_blank", ...otherProps }) => {
  return (
    <CustomLink 
      href={href} 
      target={target} >
      <span {...otherProps}/>
      {
        extern
        ? <Box 
            style={{ 
              display: "inline-block", 
              position: "relative", 
              height: "1em" 
            }} >
            <OpenInNewIcon 
              style={{ 
                  position: "absolute" 
              }} 
              fontSize="small" /> 
          </Box>
        : <></>
      }
    </CustomLink>
  )
}

export { Title, Image, Section, Paragraph, Grid2Column, Grid3Column, GridRow, GridWithIcon, Link };
