import {clearToken, getToken, login, logout, setToken} from './modules/auth';

const NOP_ACTION = {type: 'NOP'};

export {
	getToken,
	setToken,
	clearToken,
	login,
	logout,

	NOP_ACTION,
};
