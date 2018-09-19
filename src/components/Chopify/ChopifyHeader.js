import React, { Component } from 'react';

import ChopifyTitle from './ChopifyTitle.js';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyHeader extends Component {
	render() {		
		// Remove these tags once done
		return (
			<div className={styles.chopify__header}>
				<ChopifyTitle />
			</div>
		)
	}
};

export default ChopifyHeader;
