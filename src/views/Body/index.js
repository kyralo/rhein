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
			};

const card = {
	article_url: '/2018/12/12/Hexo-Theme-Sakura - 副本 (3)/',
	article_img_url: '',
	create_time: '2018-12-12 22:12',
	article_title: 'Hexo-Theme-Sakura',
	type: {
		tags: [
			{
				tag_url: '/tags/web/',
				tag_name: 'web'
			},
			{
				tag_url: '/tags/悦读/',
				tag_name: '悦读'
			}
		],
		categorie: {
			categorie_url: '/categories/技术/',
			categorie_name: '技术'
		}
	},
	simple_content: 'hexo-sakura主题使用教程'
};

export default class Body extends React.Component {

	render() {
		return (
			<div className="_body" style={{
				width: '50%',
				margin: 'auto'
			}}>
				<Annunciate/>
				<Card card={card}/>
				<Card card={card}/>
				<Card card={card}/>
				<Card card={card}/>
				<Card card={card}/>
				<VideoPlayer options={options} />
			</div>
		);
	}
}
