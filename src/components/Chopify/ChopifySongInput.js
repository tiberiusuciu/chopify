import React, { Component } from 'react';

import Dropzone from 'react-dropzone'

import styles from '../../styles/Chopify/Chopify.css';

class ChopifySongInput extends Component {
	
	onDrop(files) {
		console.log("files", files);
	}

	render() {		
		return (
			<div>
				<Dropzone
				accept="audio/*"
				className={styles.chopify__song__input + " " + styles.chopify__basic__pill}
				onDrop={this.onDrop.bind(this)}
				>
					{({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
						if (isDragActive) {
						return "This file is authorized";
						}
						if (isDragReject) {
						return "This file is not authorized";
						}
						return acceptedFiles.length || rejectedFiles.length
						? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
						: "Click or drop here to upload song ";
					}}
				</Dropzone>
			</div>
		)
	}
};

export default ChopifySongInput;
