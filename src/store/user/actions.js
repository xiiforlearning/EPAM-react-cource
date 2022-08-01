import { LOGIN_USER_INFO, LOGOUT_USER_INFO } from './types';

export const loginUserInfo = (payload) => ({
	type: LOGIN_USER_INFO,
	payload,
});

export const logoutUserInfo = (
	payload = {
		role: '',
		isAuth: false,
		name: '',
		email: '',
		token: '',
	}
) => ({
	type: LOGOUT_USER_INFO,
	payload,
});
