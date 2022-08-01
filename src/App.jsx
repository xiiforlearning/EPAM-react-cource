import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthors, fetchCourses, getMe } from './services/http.service';
import { loginUserInfo } from './store/user/actions';
import { setCourseList } from './store/course/actions';
import { setAuthorList } from './store/author/actions';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
import PrivateRoute from './components/ PrivateRoute/ PrivateRoute';

function App() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token);

	useEffect(() => {
		const currentToken = localStorage.getItem('token');
		dispatch(
			loginUserInfo({
				token: currentToken,
			})
		);
	}, [dispatch]);

	useEffect(() => {
		const getName = async () => {
			if (token) {
				const newName = await getMe(token);
				dispatch(loginUserInfo(newName.data.result));
			}
		};
		getName();
	}, [dispatch, token]);

	useEffect(() => {
		const getCourseList = async () => {
			const response = await fetchCourses();
			dispatch(setCourseList(response.data.result));
		};
		const getAuthorList = async () => {
			const response = await getAuthors();
			dispatch(setAuthorList(response.data.result));
		};
		getAuthorList();
		getCourseList();
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={token ? <Courses /> : <Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				{!!token && (
					<>
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/:id' element={<CourseInfo />} />
						<Route
							path='/courses/add'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
						<Route
							path='/courses/update/:courseId'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
					</>
				)}
				<Route path='*' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
