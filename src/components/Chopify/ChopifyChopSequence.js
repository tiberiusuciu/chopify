import React, { Component } from 'react';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyChopSequence extends Component {
	render() {		
		// Remove these tags once done
		return (
            <div className={styles.chopify__sequence}>
                <div className={styles.chopify__timepill__options}>
                    <div className={styles.chopify__timepill__customname}>
                        <input type="checkbox" name="Custom Name" value="name" />
                        <label className={styles.chopify__timepill__customname__label}>Add custom name</label>
                    </div>
                    <div className={styles.chopify__timepill__fadeeffect}>
                        <input type="checkbox" name="Add Fade" value="fade" />
                        <label className={styles.chopify__timepill__fadeeffect__label}>Add fade effect</label>
                    </div>
                </div>
                <div className={styles.chopify__basic__pill + " " +  styles.chopify__timepill}>
                    <div className={styles.chopify__timepill__start__text}>
                        Start
                    </div>
                    <input className={styles.chopify__timepill__start__input} type="text" placeholder="hh/mm/ss" />
                    <input className={styles.chopify__timepill__end__input} type="text" placeholder="hh/mm/ss" />
                    <div className={styles.chopify__timepill__end__text}>
                        End
                    </div>
                </div>

                {/* <div className={styles.chopify__basic__pill + " " +  styles.chopify__fadepill}>
                    <div className={styles.chopify__fadepill__start__text}>
                        Fade-In
                    </div>
                    <input className={styles.chopify__fadepill__start__input} type="text" placeholder="hh/mm/ss" />
                    <input className={styles.chopify__fadepill__end__input} type="text" placeholder="hh/mm/ss" />
                    <div className={styles.chopify__fadepill__end__text}>
                        Fade-out
                    </div>
                </div>

                <div className={styles.chopify__basic__pill + " " +  styles.chopify__namepill}>
                    <div className={styles.chopify__namepill__label}>
                        Name
                    </div>
                    <input className={styles.chopify__namepill__input} type="text" placeholder="MY Chopped Song" />
                </div>

                <div className={styles.chopify__basic__pill + " " + styles.chopify__downloadpill}>
                    DOWNLOAD
                </div> */}
            </div>
		)
	}
};

export default ChopifyChopSequence;
