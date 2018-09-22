// Styles 
require('./main.scss');
import 'react-tippy/dist/tippy.css';

// Libs
import * as React from 'react';
import { render } from 'react-dom';

// Misc
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';

const App = () => (
    <div>
        <Header/>
        <Basic/>
    </div>
);

render(
    <App/>,
    document.getElementById('react-root')
);