import React from 'react';

import Search_icon from './Search.png'

import './Search.moudle.css'

export default class Search extends React.Component {

	render() {
		return (
			<div className={"_search"}>
				<img src={Search_icon} alt={"搜索"}/>
			</div>
		);
	}
}
