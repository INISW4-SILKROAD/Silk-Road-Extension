import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
var container = document.getElementById('root');
var root = createRoot(container);
root.render( /*#__PURE__*/React.createElement(Main, null));