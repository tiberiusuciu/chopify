
function action(type, payload = {}) {
	return { type, ...payload };
}

export const FILE_UPLOAD = "FILE_UPLOAD";
export const ADD_SEQUENCE = "ADD_SEQUENCE";
export const TOGGLE_MENU = "TOGGLE_MENU";


export const file_upload = (file) => action(FILE_UPLOAD, {file});
export const add_sequence = () => action(ADD_SEQUENCE);
export const toggle_menu = (menuState) => action(TOGGLE_MENU, {menuState});