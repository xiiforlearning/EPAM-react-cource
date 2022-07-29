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
	try {
		const response = await axios.get('/users/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const fetchCourses = async () => {
	try {
		const response = await axios.get('/courses/all');
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const getAuthors = async () => {
	try {
		const response = await axios.get('/authors/all');
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const addCourse = async (body) => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.post('/courses/add', body, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const updateCourse = async (body, id) => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.put(`/courses/${id}`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const removeCourse = async (id) => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.delete(`/courses/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};

export const addAuthor = async (body) => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.post('/authors/add', body, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response;
	} catch (error) {
		alert(error.response.data.result);
	}
};
