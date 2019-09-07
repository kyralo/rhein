import React from 'react';

import './css/normalize.css'
import styles from './CircleMagic.module.css'

import Download from './img/download.svg'

export default class CircleMagic extends React.Component {

    render() {

        return (
            <div className="_circleMagic">
            	<div className={styles.wrapper}>
				    <header className={styles.header}>
				        <div className={styles.full_center}>
				            <h1 className={styles.header__heading}>Rhein</h1>
				            <h3 className={styles.subscribe}>我连一秒都没有拥有她却感觉失去她千万次.</h3>
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

