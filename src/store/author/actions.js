import { CREATE_NEW_AUTHOR, REMOVE_AUTHOR, SET_AUTHORS_LIST } from './types';

export const setAuthorList = (payload) => ({
	type: SET_AUTHORS_LIST,
	payload,
});

export const createAuthorActionCreator = (payload) => ({
	type: CREATE_NEW_AUTHOR,
	payload,
});

export const removeAuthorActionCreator = (payload) => ({
	type: REMOVE_AUTHOR,
	payload,
});
