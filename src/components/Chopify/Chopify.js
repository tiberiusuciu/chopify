import React, { Component } from 'react';

import ChopifyHeader from './ChopifyHeader.js';
import ChopifySongInput from './ChopifySongInput.js';
import ChopifyChopSequences from './ChopifyChopSequences.js';
import ChopifyFooter from './ChopifyFooter.js';
import ChopifyMenu from './ChopifyMenu.js';
import ChopifyMenuScreen from './ChopifyMenuScreen.js';

import styles from '../../styles/Chopify/Chopify.css';

class Chopify extends Component {
	
	displayMenu(menuState, onToggleMenu, onAddSequence) {
		if (menuState) {			
			return (
				<ChopifyMenuScreen onToggleMenu={onToggleMenu} menuState={menuState} onAddSequence={onAddSequence} />
			)
		}
	}

	render() {		
		return (
			<div className={styles.chopify__background + " " + styles.chopify__base_style}>
                <div className={styles.chopify__background__mask}>
					{ this.displayMenu(this.props.chopify.displayMenu, this.props.onToggleMenu, this.props.onAddSequence) }
                    <ChopifyHeader/>
                    <ChopifySongInput />
                    <ChopifyChopSequences
						chopify={this.props.chopify}
						onToggleName={this.props.onToggleName}
						onToggleFade={this.props.onToggleFade} />
					<ChopifyMenu onToggleMenu={this.props.onToggleMenu} />
                    <ChopifyFooter />
                </div>
			</div>
		)
	}
};

export default Chopify;
