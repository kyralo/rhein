import React from 'react';
import $ from 'jquery';

import './css/normalize.css'
import styles from './CircleMagic.module.css'

import Download from './img//download.svg'

var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = './js/circleMagic.js';
document.head.appendChild(script);

window.onload = function() {
	$(".btn").on("click", function (e) {
	  e.preventDefault();
	  var top = window.innerHeight;
	  $('body,html').animate({scrollTop: top + 20}, 1200);
	});

	// $("._circleMagic .header").circleMagic({
	//   radius: 35,
	//   density: .1,
	//   color: 'rgba(255,255,255, .4)',
	//   clearOffset: .9
	// });
}

export default class CircleMagic extends React.Component {



    render() {
        return (
            <div className="_circleMagic">
            	<div className={styles.wrapper}>
			    <header className={styles.header}>
			        <div className={styles.full_center}>
			            <h1 className={styles.header__heading}>Rhein</h1>
			            <h3 className={styles.subscribe}>nothing is impossible if you want and try your best.</h3>
			        </div>
			        <div className={styles.arrow__btn}>
			            <img src={Download} alt="" width="50" height="50" className={styles.btn} />
			        </div>
			    </header>
			</div>
            </div>
        );
    }
}

