import React from 'react';

import Logo from './Logo'
import Content from './Content'
import Search from './Search'

import './Header.css'


export default class Header extends React.Component {

    render() {
        return (
            <div className={"_header"}>
				<Logo/>
				<Content/>
				<Search/>
			</div>
        );
    }
}