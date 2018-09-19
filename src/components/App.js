import React, { Component } from 'react';

import Chopify from './Chopify/Chopify.js';

import styles from '../styles/App.css';

class App extends Component {
	render() {		
		// Remove these tags once done
		return (
			<div>
				<Chopify />
				{/* <div 
					className={styles.example_button}
					onClick={() => {this.props.onActionEvent()}}>
					<div>{this.props.example.selected_name} has clicked!<br />Click me!</div>
				</div>
				<div className={styles.credits}>
					Boilerplate revised by <a target="_blank" href="https://github.com/tiberiusuciu">Tiberius Suciu</a>
				</div> */}
			</div>
		)
	}
};

export default App;
