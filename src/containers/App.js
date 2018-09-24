import App from '../components/App';
import { connect } from 'react-redux';

import {
	file_upload,
	add_sequence,
	toggle_menu,
	toggle_name,
	toggle_fade,
	toggle_delete,
	delete_sequence,
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
		onToggleName: (id, isChecked) => {
			dispatch(toggle_name(id, isChecked));
		},
		onToggleFade: (id, isChecked) => {
			dispatch(toggle_fade(id, isChecked));
		},
		onToggleDelete: (isDelete) => {
			dispatch(toggle_delete(isDelete));
		},
		onDeleteSequence: (id) => {
			dispatch(delete_sequence(id));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
