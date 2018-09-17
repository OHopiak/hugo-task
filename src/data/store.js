import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer';
import {apiMiddleware, cookieMiddleware} from './middleware';
import {apiUrls, cookies} from '../configs';
import {TOKEN} from './modules/auth';

let logger = store => next => next;

if (process.env.NODE_ENV === 'development') {
	const {createLogger} = require('redux-logger');
	logger = createLogger({
		collapsed: true,
	});
}

const api = apiMiddleware({
	urls: apiUrls
});

const middleware = applyMiddleware(
	api,
	cookieMiddleware(cookies, TOKEN),
	logger,
);

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	middleware,
);

export default store;
