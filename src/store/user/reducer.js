import { LOGIN_USER_INFO, LOGOUT_USER_INFO } from './types';

const userInitialState = {
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
			return {
				...state,
				...userInitialState,
			};

		default:
			return state;
	}
}
