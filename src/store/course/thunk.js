import { STATUS_TEXT_CREATED } from '../../constants';
import {
	addCourse,
	removeCourse,
	updateCourse,
} from '../../services/http.service';
import {
	addCourseActionCreator,
	removeCourseActionCreator,
	updateCourseActionCreator,
} from './actions';

export const addCourseAction = (newCourse) => {
	return async function (dispatch) {
		const response = await addCourse(newCourse);
		if (
			response.data.successful &&
			response.statusText === STATUS_TEXT_CREATED
		) {
			dispatch(addCourseActionCreator(response.data.result));
		}
	};
};

export const updateCourseAction = (newCourse, id) => {
	return async function (dispatch) {
		const response = await updateCourse(newCourse, id);
		if (response.data.successful) {
			dispatch(updateCourseActionCreator(response.data.result, id));
		}
	};
};

export const removeCourseAction = (id) => {
	return async function (dispatch) {
		const response = await removeCourse(id);
		if (response.data.successful) {
			dispatch(removeCourseActionCreator(id));
		}
	};
};
