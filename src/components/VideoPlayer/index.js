/*
* @Author: 王宸
* @Date:   2020-03-12 11:39:01
* @Last Modified by:   王宸
* @Last Modified time: 2020-03-12 11:52:12
*/
import React from 'react';
import Dplayer from "react-dplayer";

export default class index extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Dplayer style={{width: '600px', margin: 'auto'}} options={this.props.options}/>
		);
	}
}
