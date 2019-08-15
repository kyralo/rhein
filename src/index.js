import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './redux'

import { HashRouter as Router } from 'react-router-dom'
import Demo from './components/pravite/Demo'

const App = (
    <Provider store = {store}>
        <Router>
            <Demo/>
        </Router>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));