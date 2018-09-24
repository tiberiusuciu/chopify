import React, { Component } from 'react';

import ChopifyChopSequence from './ChopifyChopSequence.js';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyChopSequences extends Component {
	generateSequences(
		sequences,
		onToggleName,
		onToggleFade,
		deleteMode,
		onDeleteSequence,
		onChangeTimeBegin,
		onChangeTimeEnd,
		onChangeFadeBegin,
		onChangeFadeEnd,
		onChangeName) {
		return sequences.map((s) => {
			return (
				<ChopifyChopSequence 
					sequence={s}
					onToggleName={onToggleName}
					onToggleFade={onToggleFade}
					deleteMode={deleteMode}
					onDeleteSequence={onDeleteSequence}
					onChangeTimeBegin={onChangeTimeBegin}
					onChangeTimeEnd={onChangeTimeEnd}
					onChangeFadeBegin={onChangeFadeBegin}
					onChangeFadeEnd={onChangeFadeEnd}
					onChangeName={onChangeName}/>
			)
		})
	}
	
	render() {		
		return (
			<div className={styles.chopify__sequences}>
				{this.generateSequences(
					this.props.chopify.sequences,
					this.props.onToggleName,
					this.props.onToggleFade,
					this.props.chopify.deleteMode,
					this.props.onDeleteSequence,
					this.props.onChangeTimeBegin,
					this.props.onChangeTimeEnd,
					this.props.onChangeFadeBegin,
					this.props.onChangeFadeEnd,
					this.props.onChangeName)}
			</div>
		)
	}
};

export default ChopifyChopSequences;
