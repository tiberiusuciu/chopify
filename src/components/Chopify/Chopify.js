import React, { Component } from 'react';

import ChopifyHeader from './ChopifyHeader.js';
import ChopifySongInput from './ChopifySongInput.js';
import ChopifyChopSequences from './ChopifyChopSequences.js';
import ChopifyFooter from './ChopifyFooter.js';
import ChopifyMenu from './ChopifyMenu.js';

import styles from '../../styles/Chopify/Chopify.css';

class Chopify extends Component {
	render() {		
		// Remove these tags once done
		return (
			<div className={styles.chopify__background + " " + styles.chopify__base_style}>
                <div className={styles.chopify__background__mask}>
                    <ChopifyHeader/>
                    <ChopifySongInput />
                    <ChopifyChopSequences />
					<ChopifyMenu />
                    <ChopifyFooter />
                </div>
			</div>
		)
	}
};

export default Chopify;
