import React from 'react';


import VideoPlayer from '@comp/VideoPlayer'
import Annunciate from '@comp/Annunciate'
import FancyImg from '@comp/FancyImg'
import Card from '@comp/Card'


const options = {
                video: {
					url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4'
				},
				screenshot: 'true'
			}

export default class Body extends React.Component {

	render() {
		return (
			<div className="_body" style={{
				width: '50%',
				margin: 'auto'
			}}>
				<Annunciate/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<VideoPlayer options={options} />
			</div>
		);
	}
}
