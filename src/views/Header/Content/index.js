import React from 'react';

import Nav from './../../../components/Nav'

import './Content.moudle.css'

export default class Content extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			navList: [
				'首页',
				'归档',
				'清单',
				'留言版',
				'友人帐',
				'关于',
				'外链'
			]
		}
	}

	render() {
		return (
			<div className={"_content"}>
				<Nav navList={this.state.navList}/>
			</div>
		);
	}
}
