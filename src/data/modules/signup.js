import {API_PREFIX_TYPE} from './api';

const SIGN_UP = API_PREFIX_TYPE + 'SIGN_UP';

const signup = ({first_name, last_name, email, password, remember = false}) => ({
	type: SIGN_UP,
	payload: {
		ref: 'signup',
		method: 'GET', // just to mock POST
		// body: {first_name, last_name,email, password, remember}
	}
});


const initState = {};
const reducer = (state = initState, action) => {
switch (action.type) {
	case SIGN_UP:
		return {...state, current: action.payload};
	default:
		return state;
}
};

export default reducer;
export {
	signup
}