import React from 'react';

import "./style.css"

export default class Card extends React.Component {

	render() {
		return (
			<div className="card">
				<article className="post post-list-thumb post-list-thumb-left post-list-show" 
						 itemScope="" itemType="http://schema.org/BlogPosting">
					  <div className="post-thumb">
					    <a href="/2018/12/12/Hexo-Theme-Sakura - 副本 (3)/">
					      <img className="lazyload" 
					      	   src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/image-404.png" 
					      />
					    </a>
					  </div>
					  <div className="post-content-wrap">
					    <div className="post-content">
					      <div className="post-date">
					        <i className="iconfont icon-time"></i>2018-12-12 22:12
					      </div>
						  <a href="/2018/12/12/Hexo-Theme-Sakura - 副本 (3)/" 
						  	 className="post-title">
					        <h3>Hexo-Theme-Sakura</h3>
					      </a>
					      <div className="post-meta">
					        <span>
					        	<i className="fa fa-tags"></i>
					            <a href="/tags/web/">web<em>·</em></a>
					            <a href="/tags/悦读/">悦读<em>·</em></a>
					        </span>
					        <span>
					          	<i className="iconfont icon-file"></i>
					           	<a href="/categories/技术/">技术</a>
					        </span>
					      </div>
					      <div className="float-content">
					        <p>hexo-sakura主题使用教程</p>
					        <div className="post-bottom">
					          	<a href="/2018/12/12/Hexo-Theme-Sakura - 副本 (3)/" 
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
