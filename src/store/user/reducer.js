import { LOGIN_USER_INFO, LOGOUT_USER_INFO } from './types';

export const userInitialState = {
	role: '',
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export default function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case LOGIN_USER_INFO:
			return {
				...state,
				...action.payload,
			};

		case LOGOUT_USER_INFO:
			return userInitialState;

		default:
			return state;
	}
}
