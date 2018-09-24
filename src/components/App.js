import React, { Component } from 'react';

import Chopify from './Chopify/Chopify.js';

import styles from '../styles/App.css';

class App extends Component {
	render() {		
		console.log("PROPS", this.props);
		
		return (
			<div>
				<Chopify chopify={this.props.chopify}
					onFileUpload={this.props.onFileUpload}
					onAddSequence={this.props.onAddSequence}
					onToggleMenu={this.props.onToggleMenu}
					onToggleName={this.props.onToggleName}
					onToggleFade={this.props.onToggleFade}/>
			</div>
		)
	}
};

export default App;
