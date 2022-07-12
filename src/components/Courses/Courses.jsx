import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './courses.module.scss';

axios.defaults.baseURL = 'http://localhost:4000/';

const Courses = () => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState([]);
	const [allAuthors, setAllAuthors] = useState([]);
	useEffect(() => {
		const getCourses = async () => {
			return await axios.get('/courses/all').then((response) => {
				setCourses(response.data.result);
			});
		};
		getCourses();
	}, []);

	useEffect(() => {
		const getAllAuthors = async () => {
			return await axios.get('/authors/all').then((response) => {
				setAllAuthors(response.data.result);
			});
		};
		getAllAuthors();
	}, []);

	const renderCourseList = (courses, allAuthors) => {
		if (courses.length && allAuthors.length) {
			return courses.map((item) => (
				<CourseCard
					key={item.id}
					title={item.title}
					description={item.description}
					creationDate={item.creationDate}
					duration={item.duration}
					authors={item.authors}
					allAuthors={allAuthors}
					id={item.id}
				/>
			));
		} else {
			return null;
		}
	};

	return (
		<div className={styles.wrapper}>
			<SearchBar
				addCourseOnClick={() => {
					navigate('/courses/add');
				}}
			/>
			{renderCourseList(courses, allAuthors)}
		</div>
	);
};

export default Courses;
