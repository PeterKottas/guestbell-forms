import * as React from 'react';
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';

const App = () => (
    <div>
        <Header />
        <Basic />
    </div>
);

export default hot(module)(App);