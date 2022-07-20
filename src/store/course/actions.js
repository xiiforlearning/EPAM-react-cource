import { ADD_NEW_COURSE, SET_COURSES_LIST } from './types';

export const setCourseList = (payload) => ({
	type: SET_COURSES_LIST,
	payload,
});

export const addNewCourse = (payload) => ({
	type: ADD_NEW_COURSE,
	payload,
});
