import React from 'react';

import './Logo.moudle.css'
export default class Logo extends React.Component {

    render() {
        return (
            <div className={"_logo"}>
            	<a href = {"https://kyralo.github.io"}>
            		<span>歳の翼</span>
            		<span>kyralo</span>
            	</a>
			</div>
        );
    }
}