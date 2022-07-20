import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthors, getCourses, getMe } from './services/http.service';
import { loginUserInfo } from './store/user/actions';
import { setCourseList } from './store/course/actions';
import { setAuthorList } from './store/author/actions';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.user.token);

	useEffect(() => {
		const getName = async () => {
			if (token) {
				const newName = await getMe(token);
				dispatch(
					loginUserInfo({
						name: newName.data.result.name,
					})
				);
			}
		};
		getName();
	}, [dispatch, token]);

	useEffect(() => {
		const getCourseList = async () => {
			const response = await getCourses();
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
						<Route path='/courses/add' element={<CreateCourse />} />
					</>
				)}
				<Route path='*' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
