import { CREATE_NEW_AUTHOR, REMOVE_AUTHOR, SET_AUTHORS_LIST } from './types';

export const authorInitialState = [];

export default function authorReducer(state = authorInitialState, action) {
	switch (action.type) {
		case SET_AUTHORS_LIST:
			return action.payload;

		case CREATE_NEW_AUTHOR:
			return [...state, action.payload];

		case REMOVE_AUTHOR:
			return state.filter((item) => item.id !== action.payload);

		default:
			return state;
	}
}
