const API_PREFIX_TYPE = 'API:';

const generateListActionType = name => {
	const prefix = API_PREFIX_TYPE + name + ':';
	return Object.freeze({
		PREFIX: prefix,
		GET_ALL: prefix + 'GET_ALL',
		GET_FILTERED: prefix + 'GET_FILTERED',
		GET: prefix + 'GET',
		GET_NEXT: prefix + 'NEXT',
		CLEAR_LAST: prefix + 'CLEAR_LAST',
	});
};

/**
 * Creates a type and a reducer for an api endpoint
 * @param type action type prefix
 * @param endpoint relative url of the api endpoint (example: /users)
 * @param initState the initial state for the reducer
 * @returns {{type: *, reducer: reducer}}
 */
const apiEndpoint = (type, endpoint, initState = {}) => {
	const TYPE = generateListActionType(type);
	const endpointUrl = createEndpointUrl(endpoint);
	const startState = {
		...initState,
		set: {},
		fetched: false,
	};
	const reducer = (state = startState, action) => {
		switch (action.type) {
			case TYPE.GET_ALL:
				return {
					...state,
					...action.payload,
					list: action.payload.results,
					set: {
						...state.set,
						...action.payload.set,
					},
					fetched: true
				};
			case TYPE.GET_FILTERED:
				return {
					...state,
					...action.payload,
					filteredList: action.payload.results,
					set: {
						...state.set,
						...action.payload.set,
					},
					fetched: true
				};
			case TYPE.GET:
				return {
					...state,
					set: {
						...state.set,
						...action.payload.set,
					},
					fetched: true,
				};
			case TYPE.CLEAR_LAST:
				return {
					...state,
					latest: null,
				};

			default:
				return state;
		}
	};
	const actions = {
		getAll: () => ({
			type: TYPE.GET_ALL,
			payload: {
				url: endpointUrl('/'),
			}
		}),
		getFiltered: (filter) => ({
			type: TYPE.GET_FILTERED,
			payload: {
				url: endpointUrl('/'),
				body: filter
			}
		}),
		getById: id => ({
			type: TYPE.GET,
			payload: {
				url: endpointUrl(`/${id}/`),
			}
		}),
	};

	return {
		type: TYPE,
		reducer,
		actions,
		endpointUrl,
	};
};

const API_URL_PREFIX = '/api';

const apiUrl = url => API_URL_PREFIX + url;

const createEndpointUrl = endpoint => url => API_URL_PREFIX + endpoint + url;

export {
	API_PREFIX_TYPE,
	generateListActionType,
	apiEndpoint,
	apiUrl,
	createEndpointUrl,
};
