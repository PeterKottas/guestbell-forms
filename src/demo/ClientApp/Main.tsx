// Styles 
require('./main.scss');
import 'react-tippy/dist/tippy.css';

// Libs
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
}

// Misc
require('babel-polyfill');

render(
    <App />,
    document.getElementById('react-root')
);