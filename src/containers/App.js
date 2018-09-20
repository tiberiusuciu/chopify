import App from '../components/App';
import { connect } from 'react-redux';

import {
	file_upload,
	add_sequence,
	toggle_menu
} from '../actions/action';

const mapStateToProps = (state, ownProps) => {
	return {
		chopify: state.chopify,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFileUpload: (file) => {
			dispatch(file_upload(file));
		},
		onAddSequence: () => {
			dispatch(add_sequence());
		},
		onToggleMenu: (menuState) => {
			dispatch(toggle_menu(menuState));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
