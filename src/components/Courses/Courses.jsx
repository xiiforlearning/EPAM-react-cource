import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from './courses.module.scss';

const Courses = () => {
	const navigate = useNavigate();
	const courses = useSelector((state) => state.course);
	const allAuthors = useSelector((state) => state.author);

	return (
		<div className={styles.wrapper}>
			<SearchBar
				addCourseOnClick={() => {
					navigate('/courses/add');
				}}
			/>
			{courses.map((item) => (
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
			))}
		</div>
	);
};

export default Courses;
