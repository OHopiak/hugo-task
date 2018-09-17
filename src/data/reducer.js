import {combineReducers} from 'redux';
import authReducer from './modules/auth';
import signupReducer from './modules/signup';

const appReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
});

const reducer = (state, action) => appReducer(state, action);

export default reducer;
