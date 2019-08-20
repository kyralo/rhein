import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import { Provider } from 'react-redux'
import store from './redux'

import { HashRouter as Router } from 'react-router-dom'

import Header from './views/Header'
import Body from './views/Body'
import Footer from './views/Footer'

const App = (
    <Provider store = {store}>
		<Router>
			<Header/>
			<Body/>
			<Footer/>
		</Router>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));