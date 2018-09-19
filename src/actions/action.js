
function action(type, payload = {}) {
	return { type, ...payload };
}

// This is where you define your action names

// This const is an example, remove it once done
export const EXAMPLE_ACTION = "EXAMPLE_ACTION";


// This is where you throw the action event

// This event is an example, remove it once done
export const action_event = () => action(EXAMPLE_ACTION, {});