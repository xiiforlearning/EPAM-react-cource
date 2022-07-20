import { ADD_NEW_COURSE, SET_COURSES_LIST } from './types';

const courseInitialState = [];

export default function courseReducer(state = courseInitialState, action) {
	switch (action.type) {
		case SET_COURSES_LIST:
			return [...new Set(action.payload)];

		case ADD_NEW_COURSE:
			return [...state, action.payload];

		default:
			return state;
	}
}
