import {
	ADD_NEW_COURSE,
	REMOVE_COURSE,
	SET_COURSES_LIST,
	UPDATE_COURSE,
} from './types';

export const setCourseList = (payload) => ({
	type: SET_COURSES_LIST,
	payload,
});

export const addCourseActionCreator = (payload) => ({
	type: ADD_NEW_COURSE,
	payload,
});

export const updateCourseActionCreator = (updatedCourse, id) => ({
	type: UPDATE_COURSE,
	payload: {
		updatedCourse,
		id,
	},
});

export const removeCourseActionCreator = (payload) => ({
	type: REMOVE_COURSE,
	payload,
});
