import {
	FILE_UPLOAD,
	ADD_SEQUENCE,
	TOGGLE_MENU,
	TOGGLE_FADE,
	TOGGLE_NAME,
} from '../actions/action.js';

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

		default:
			return state;
	}
};

export default ({
	chopify,
});
