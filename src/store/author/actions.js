import { CREATE_NEW_AUTHOR, SET_AUTHORS_LIST } from './types';

export const setAuthorList = (payload) => ({
	type: SET_AUTHORS_LIST,
	payload,
});

export const createNewAuthor = (payload) => ({
	type: CREATE_NEW_AUTHOR,
	payload,
});
