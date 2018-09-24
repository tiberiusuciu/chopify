
function action(type, payload = {}) {
	return { type, ...payload };
}

export const FILE_UPLOAD = "FILE_UPLOAD";
export const ADD_SEQUENCE = "ADD_SEQUENCE";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_NAME = "TOGGLE_NAME";
export const TOGGLE_FADE = "TOGGLE_FADE";


export const file_upload = (file) => action(FILE_UPLOAD, {file});
export const add_sequence = () => action(ADD_SEQUENCE);
export const toggle_menu = (menuState) => action(TOGGLE_MENU, {menuState});
export const toggle_name = (id, isChecked) => action(TOGGLE_NAME, {id, isChecked});
export const toggle_fade = (id, isChecked) => action(TOGGLE_FADE, {id, isChecked});