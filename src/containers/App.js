import App from '../components/App';
import { connect } from 'react-redux';

import {
	action_event
} from '../actions/action';

const mapStateToProps = (state, ownProps) => {
	return {
		// To be removed
		example: state.example,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// Example of even to be removed
		onActionEvent: () => {
			console.log("successfully called event!");
			dispatch(action_event());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
