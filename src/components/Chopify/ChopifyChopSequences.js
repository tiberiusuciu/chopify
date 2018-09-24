import React, { Component } from 'react';

import ChopifyChopSequence from './ChopifyChopSequence.js';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyChopSequences extends Component {
	generateSequences(sequences, onToggleName, onToggleFade) {
		return sequences.map((s) => {
			return (
				<ChopifyChopSequence sequence={s} onToggleName={onToggleName} onToggleFade={onToggleFade} />
			)
		})
	}
	
	render() {		
		return (
			<div className={styles.chopify__sequences}>
				{this.generateSequences(this.props.chopify.sequences, this.props.onToggleName, this.props.onToggleFade)}
			</div>
		)
	}
};

export default ChopifyChopSequences;
