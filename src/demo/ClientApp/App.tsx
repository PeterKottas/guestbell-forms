import * as React from 'react';
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import { Test } from './pages/test/Test';

const App = () => (
    <div>
        <Header />
        {false && <Basic />}
        {true && <Test />}
    </div>
);

export default hot(module)(App);