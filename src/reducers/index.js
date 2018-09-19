import { combineReducers } from 'redux';
import { merge } from 'lodash';

// Reducers
import example from './Example.js';

// function entities(state = { usage:0 }, action) {
// 	if (action.response && action.response.entities) {
// 		return merge({}, state, action.response.entities);
// 	}

// 	return state;
// }

export default combineReducers({
	// entities,
	...example,
});
