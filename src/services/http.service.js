import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const headers = {
	'Content-Type': 'application/json',
};

export const loginService = async (userInfo) => {
	try {
		const response = await axios.post('/login', userInfo, headers);
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const registerService = async (newUser) => {
	try {
		const response = await axios.post('/register', newUser, headers);
		return response;
	} catch (error) {
		alert(error.response.data.errors[0]);
	}
};

export const getMe = async (token) => {
	const response = await axios.get('/users/me', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response;
};
