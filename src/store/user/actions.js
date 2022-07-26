import { LOGIN_USER_INFO, LOGOUT_USER_INFO } from './types';

export const loginUserInfo = (payload) => ({
	type: LOGIN_USER_INFO,
	payload,
});

export const logoutUserInfo = () => ({
	type: LOGOUT_USER_INFO,
});
