import React from 'react';
import Application from '../components/Application';
require('../public/styles/css/App.css');

/**
 * default viewer call
 * add css and more here
 */
const Viewer = (props) => {
  return <Application {...props} />;
}

export default Viewer;
