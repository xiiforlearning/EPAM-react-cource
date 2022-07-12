import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const token = localStorage.getItem('token');
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={token ? <Courses /> : <Login />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:id' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
