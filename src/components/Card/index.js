import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

// const card = {
// 	article_url: '',
// 	article_img_url: '',
// 	create_time: '',
// 	article_title: '',
// 	type: {
// 		tags: [
// 			{
// 				tag_url: '',
// 				tag_name: ''
// 			}
// 		],
// 		categories: {
		// 	categorie_url: '',
		// 	categorie_name: ''
		// }
// 	},
// 	simple_content: ''
// }
// 


export default class Card extends React.Component {

	render() {

		const card = this.props.card;

		return (
			<div className="card">
				<article className="post post-list-thumb post-list-thumb-left post-list-show" 
						 itemScope="" itemType="http://schema.org/BlogPosting">
					  <div className="post-thumb">
					    <a href={card.article_url}>
					      <img className="lazyload" 
					      	   src={
					      	   	card.article_img_url == '' 
					      	   	? 
					      	   	'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/image-404.png'
					      	   	:
					      	   	card.article_img_url
					      	   } 
					      />
					    </a>
					  </div>
					  <div className="post-content-wrap">
					    <div className="post-content">
					      <div className="post-date">
					        <i className="iconfont icon-time"></i>
					        {card.create_time}
					      </div>
						  <a href={card.article_url} 
						  	 className="post-title">
					        <h3>{card.article_title}</h3>
					      </a>
					      <div className="post-meta">
					        <span>
					        	<FontAwesomeIcon className="fa fa-tags" icon={faTags} />
								{
									card.type.tags.map( (item, key) => {
										return <a href={item.tag_url} key={key}>{item.tag_name}<em>·</em></a>
									})
								}
					        </span>
					        <span>
					          	<i className="iconfont icon-file"></i>

					           	<a href={card.type.categorie.categorie_url}>{card.type.categorie.categorie_name}</a>
					        </span>
					      </div>
					      <div className="float-content">
					        <p>{card.simple_content}</p>
					        <div className="post-bottom">
					          	<a href={card.article_url} 
					          	className="button-normal">
					            	<i className="iconfont icon-caidan"></i>
					          	</a>
					        </div>
					      </div>
					    </div>
					  </div>
				</article>
			</div>
		);
	}
}
