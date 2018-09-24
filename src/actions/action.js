
function action(type, payload = {}) {
	return { type, ...payload };
}

export const FILE_UPLOAD = "FILE_UPLOAD";
export const ADD_SEQUENCE = "ADD_SEQUENCE";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_NAME = "TOGGLE_NAME";
export const TOGGLE_FADE = "TOGGLE_FADE";
export const TOGGLE_DELETE = "TOGGLE_DELETE";
export const DELETE_SEQUENCE = "DELETE_SEQUENCE";
export const CHANGE_TIME_BEGIN = "CHANGE_TIME_BEGIN";
export const CHANGE_TIME_END = "CHANGE_TIME_END";
export const CHANGE_FADE_BEGIN = "CHANGE_FADE_BEGIN";
export const CHANGE_FADE_END = "CHANGE_FADE_END";
export const CHANGE_NAME = "CHANGE_NAME";


export const file_upload = (file) => action(FILE_UPLOAD, {file});
export const add_sequence = () => action(ADD_SEQUENCE);
export const toggle_menu = (menuState) => action(TOGGLE_MENU, {menuState});
export const toggle_name = (id, isChecked) => action(TOGGLE_NAME, {id, isChecked});
export const toggle_fade = (id, isChecked) => action(TOGGLE_FADE, {id, isChecked});
export const toggle_delete = (isDelete) => action(TOGGLE_DELETE, {isDelete});
export const delete_sequence = (id) => action(DELETE_SEQUENCE, {id});
export const change_time_begin = (id, time) => action(CHANGE_TIME_BEGIN, {id, time});
export const change_time_end = (id, time) => action(CHANGE_TIME_END, {id, time});
export const change_fade_begin = (id, time) => action(CHANGE_FADE_BEGIN, {id, time});
export const change_fade_end = (id, time) => action(CHANGE_FADE_END, {id, time});
export const change_name = (id, name) => action(CHANGE_NAME, {id, name});