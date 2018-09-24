import {
	FILE_UPLOAD,
	ADD_SEQUENCE,
	TOGGLE_MENU,
	TOGGLE_FADE,
	TOGGLE_NAME,
	TOGGLE_DELETE,
	DELETE_SEQUENCE,
} from '../actions/action.js';

import _ from 'lodash';

const chopify = (state = {
	file: "",
	sequences: [],
	sequenceId: 0,
	isChopReady: false,
	isDownloadReady: false,
	deleteMode: false,
	displayMenu: false,
}, action) => {
	switch (action.type) {
		case FILE_UPLOAD:
            return {
                ...state,
                file: action.file,
			};
		case ADD_SEQUENCE:
			state.sequenceId++;
			return {
				...state,
				deleteMode: false,
				sequences: [...state.sequences, {
					begin: "",
					end: "",
					addFade: false,
					fadeBegin: "",
					fadeEnd: "",
					customName: false,
					newName: "",
					id: state.sequenceId,
				}]
			};
		case TOGGLE_MENU:
			return {
				...state,
				displayMenu: action.menuState
			};
		case TOGGLE_FADE:
			var sequences = state.sequences.map((s) => {
				if (s.id == action.id) {
					s.addFade = action.isChecked;
				}
				return s;
			});
			return {
				...state,
				sequences: [...sequences ]
			};
		case TOGGLE_NAME:
			var sequences = state.sequences.map((s) => {
				if (s.id == action.id) {
					s.customName = action.isChecked;
				}
				return s;
			});
			return {
				...state,
				sequences: [...sequences ]
			};
		case TOGGLE_DELETE:
			return {
				...state,
				deleteMode: !state.deleteMode,
			};

		case DELETE_SEQUENCE:
			var sequences = _.remove(state.sequences, (s) => {
				return s.id != action.id;
			});
			return {
				...state,
				sequences: [...sequences ]
			};
		default:
			return state;
	}
};

export default ({
	chopify,
});
