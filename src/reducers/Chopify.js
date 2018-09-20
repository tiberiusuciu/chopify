import {
	FILE_UPLOAD,
	ADD_SEQUENCE,
	TOGGLE_MENU
} from '../actions/action.js';

const chopify = (state = {
	file: "",
	sequences: [],
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
			return {
				...state,
				sequences: [...state.sequences, {
					begin: "",
					end: "",
					addFade: false,
					fadeBegin: "",
					fadeEnd: "",
					customName: false,
					newName: ""
				}]
			};
		case TOGGLE_MENU:
			return {
				...state,
				displayMenu: action.menuState
			};
		default:
			return state;
	}
};

export default ({
	chopify,
});
