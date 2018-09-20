import React, { Component } from 'react';

import ChopifyChopSequence from './ChopifyChopSequence.js';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyChopSequences extends Component {
	generateSequences(sequences) {
		var id = 0;
		return sequences.map((s) => {
			id++;
			return (
				<ChopifyChopSequence sequence={s} id={id} />
			)
		})
	}
	
	render() {		
		return (
			<div className={styles.chopify__sequences}>
				{this.generateSequences(this.props.chopify.sequences)}
			</div>
		)
	}
};

export default ChopifyChopSequences;
