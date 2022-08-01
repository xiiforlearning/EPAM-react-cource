import {
	ADD_NEW_COURSE,
	REMOVE_COURSE,
	SET_COURSES_LIST,
	UPDATE_COURSE,
} from './types';

export const courseInitialState = [];

export default function courseReducer(state = courseInitialState, action) {
	switch (action.type) {
		case SET_COURSES_LIST:
			return action.payload;

		case ADD_NEW_COURSE:
			return [...state, action.payload];

		case UPDATE_COURSE: {
			return state.map((course) =>
				course.id === action.payload.id ? action.payload.updatedCourse : course
			);
		}

		case REMOVE_COURSE:
			return state.filter((item) => item.id !== action.payload);

		default:
			return state;
	}
}
