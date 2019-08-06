import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './redux'

// import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// import Nav from './components/Nav'
// import Button from './components/Button'



/*
<Router>
<Button name={"Button"}/>
</Router>

const navList = [
    "Home",
    "About",
    "Services",
    "Team",
    "Portfolio",
    "Contact"
]
<Nav navList={navList}/>
*/

const App=(
	<Provider store = {store}>
        
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
