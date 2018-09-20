import { combineReducers } from 'redux';
import { merge } from 'lodash';

// Reducers
import Chopify from './Chopify.js';

// function entities(state = { usage:0 }, action) {
// 	if (action.response && action.response.entities) {
// 		return merge({}, state, action.response.entities);
// 	}

// 	return state;
// }

export default combineReducers({
	// entities,
	...Chopify,
});
