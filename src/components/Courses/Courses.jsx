import { mockedCoursesList } from '../../constants';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './courses.module.scss';

const Courses = () => {
	return (
		<div className={styles.wrapper}>
			<SearchBar />
			{mockedCoursesList.map((item) => (
				<CourseCard
					key={item.id}
					title={item.title}
					description={item.description}
					creationDate={item.creationDate}
					duration={item.duration}
					authors={item.authors}
				/>
			))}
		</div>
	);
};

export default Courses;
