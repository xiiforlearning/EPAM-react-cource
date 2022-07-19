import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './courses.module.scss';

const Courses = ({ courses, allAuthors }) => {
	const navigate = useNavigate();

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
