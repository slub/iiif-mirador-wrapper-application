import React from "react";
import ReactDOM from 'react-dom';
import Viewer from "./lib/Viewer";

window.render = function (config) {
  ReactDOM.render(
    <Viewer {...config} />, document.getElementById(config.id)
  );
};
