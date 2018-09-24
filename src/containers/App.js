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
	change_time_begin,
	change_time_end,
	change_fade_begin,
	change_fade_end,
	change_name,
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
		onChangeTimeBegin: (id, time) => {
			dispatch(change_time_begin(id, time))
		},
		onChangeTimeEnd: (id, time) => {
			dispatch(change_time_end(id, time));
		},
		onChangeFadeBegin: (id, time) => {
			dispatch(change_fade_begin(id, time));
		},
		onChangeFadeEnd: (id, time) => {
			dispatch(change_fade_end(id, time));
		},
		onChangeName: (id, name) => {
			dispatch(change_name(id, name));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
