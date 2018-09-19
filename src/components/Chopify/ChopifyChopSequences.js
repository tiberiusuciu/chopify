import React, { Component } from 'react';

import ChopifyChopSequence from './ChopifyChopSequence.js';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyChopSequences extends Component {
	render() {		
		// Remove these tags once done
		return (
			<div className={styles.chopify__sequences}>
				<ChopifyChopSequence />
			</div>
		)
	}
};

export default ChopifyChopSequences;
