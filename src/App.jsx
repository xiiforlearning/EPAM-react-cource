import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

import styles from './App.module.scss';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useEffect, useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [showCourses, setShowCourses] = useState(true);
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		setCourses(mockedCoursesList);
		setAuthors(mockedAuthorsList);
	}, []);

	console.log(authors);
	return (
		<div className={styles.wrapper}>
			<Header />
			{showCourses ? (
				<Courses
					addCourseOnClick={setShowCourses}
					courses={courses}
					allAuthors={authors}
				/>
			) : (
				<CreateCourse
					addCourseOnClick={setShowCourses}
					courses={courses}
					setCourses={setCourses}
					authors={authors}
					setAuthors={setAuthors}
				/>
			)}
		</div>
	);
}

export default App;
