import React, { Component } from 'react';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyMenuScreen extends Component {
	render() {		
		// Remove these tags once done
		return (
			<div className={styles.chopify__menu__screen}>
				<div className={styles.chopify__menu__screen__basic__button + " " + styles.chopify__menu__screen__add__button}>
					<div className={styles.chopify__menu__screen__add__button__text}>
					+
					</div>
				</div>
				<div className={styles.chopify__menu__screen__basic__button + " " + styles.chopify__menu__screen__chop__button}>CHOP</div>
				<div className={styles.chopify__menu__screen__basic__button + " " + styles.chopify__menu__screen__remove__button}>
					<div className={styles.chopify__menu__screen__add__button__text}>
						-
					</div>
				</div>
			</div>
		)
	}
};

export default ChopifyMenuScreen;
