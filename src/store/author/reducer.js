import { CREATE_NEW_AUTHOR, SET_AUTHORS_LIST } from './types';

export const authorInitialState = [];

export default function authorReducer(state = authorInitialState, action) {
	switch (action.type) {
		case SET_AUTHORS_LIST:
			return [...new Set(action.payload)];

		case CREATE_NEW_AUTHOR:
			return [...state, action.payload];

		default:
			return state;
	}
}
