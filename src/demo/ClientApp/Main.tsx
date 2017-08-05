import * as React from 'react';
import { render } from 'react-dom';
import Basic from './pages/basic/Basic';

const App = () => (
    <div>
        <Basic/>
    </div>
);

render(
    <App/>,
    document.getElementById('react-root')
);