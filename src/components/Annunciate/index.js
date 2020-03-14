/*
* @Author: 王宸
* @Date:   2020-03-12 15:47:50
* @Last Modified by:   王宸
* @Last Modified time: 2020-03-14 21:46:34
* @description { 通告 }
*/
import React from 'react';

export default class Annunciate extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="notice" style={{
				marginTop: '30px',
				marginBottom: '30px',
				padding: '20px',
			    border: '1px dashed #e6e6e6',
			    color: '#969696',
			    position: 'relative',
			    display: 'inline-block',
			    width: '100%',
			    background: '#fbfbfb50',
			    borderRadius: '10px',
			}}>

				<div className="notice-content" style={{
				    display: 'initial',
				    verticalAlign: 'middle',
				}}>hexo-Sakura主题已经开源，目前正在开发中...</div>
			</div>
		);
	}
}
