import React from 'react';
import styles from './Footer.module.css';

export default class Footer extends React.Component {

	render() {
		return (
			<footer className={styles.footer}>
			   <p>made with &#10084; by <a href="https://github.com/kyralo" className="github__link">kyralo</a></p>
			</footer>
		);
	}
}
