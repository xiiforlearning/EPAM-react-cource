import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { getMe } from './services';

function App() {
	const [token, setToken] = useState('');
	const [name, setName] = useState('');
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);

	const getToken = async () => {
		const newToken = localStorage.getItem('token');
		if (newToken) {
			const newName = await getMe(newToken);
			setName(newName.data.result.name);
		} else {
			setName('');
		}
		setToken(newToken);
	};

	useEffect(() => {
		setCourses(mockedCoursesList);
		setAuthors(mockedAuthorsList);
		getToken();
		window.addEventListener('token', () => {
			getToken();
		});
	}, []);

	return (
		<BrowserRouter>
			<Header name={name} />
			<Routes>
				<Route
					path='/'
					element={
						token ? (
							<Courses courses={courses} allAuthors={authors} />
						) : (
							<Login />
						)
					}
				/>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				{!!token && (
					<>
						<Route
							path='/courses'
							element={<Courses courses={courses} allAuthors={authors} />}
						/>
						<Route
							path='/courses/:id'
							element={<CourseInfo courses={courses} allAuthors={authors} />}
						/>
						<Route
							path='/courses/add'
							element={
								<CreateCourse
									courses={courses}
									setCourses={setCourses}
									authors={authors}
									setAuthors={setAuthors}
								/>
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
