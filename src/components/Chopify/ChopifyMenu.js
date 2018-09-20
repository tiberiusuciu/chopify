import React, { Component } from 'react';


import styles from '../../styles/Chopify/Chopify.css';

class ChopifyMenu extends Component {
	render() {		
		return (
			<div className={styles.chopify__menu} onClick={() => {this.props.onToggleMenu(true)}}>
			</div>
		)
	}
};

export default ChopifyMenu;
