import React from 'react';

import Styles from './Wave.module.css'

export default class Wave extends React.Component {

    render() {
        return (
            <div className="_wave">
                <div className={Styles.waveAnimation}>
                    <div className={Styles.bgTop}>
                        <div className={Styles.waveTop}></div>
                    </div>
                    <div className={Styles.bgMiddle}>
                        <div className={Styles.waveMiddle}></div>
                    </div>
                    <div className={Styles.bgBottom}>
                        <div className={Styles.waveBottom}></div>
                    </div>
                </div>
            </div>
        );
    }
}