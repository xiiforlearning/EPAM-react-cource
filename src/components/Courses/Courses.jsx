import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './courses.module.scss';

const Courses = ({ addCourseOnClick, courses, allAuthors }) => {
	console.log(allAuthors);
	return (
		<div className={styles.wrapper}>
			<SearchBar addCourseOnClick={addCourseOnClick} />
			{courses.map((item) => (
				<CourseCard
					key={item.id}
					title={item.title}
					description={item.description}
					creationDate={item.creationDate}
					duration={item.duration}
					authors={item.authors}
					allAuthors={allAuthors}
				/>
			))}
		</div>
	);
};

export default Courses;
