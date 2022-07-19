import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import {
	dateConvert,
	getAutors,
	timeConvert,
} from '../../helpers/getCourseInfo';

import styles from './courseInfo.module.scss';

const CourseInfo = ({ courses, allAuthors }) => {
	const { id } = useParams();
	const [courseData, setCourseData] = useState({});
	useEffect(() => {
		setCourseData(courses.find((course) => course.id === id));
	}, [courseData, courses, id]);

	const isEmpty = Object.keys(courseData).length === 0;

	return isEmpty ? null : (
		<div className={styles.wrapper}>
			<Link to='/courses'>{'< Back to courses'}</Link>
			<div className={styles.mainInfo}>
				<h2 className={styles.title}>{courseData.title}</h2>
				<div>
					<p className={styles.description}>{courseData.description}</p>
					<div className={styles.courseInfo}>
						<div>
							<span>ID: </span>
							{courseData.id && <p>{courseData.id}</p>}
						</div>
						<div>
							<span>Duration: </span>
							{courseData.duration && <p>{timeConvert(courseData.duration)}</p>}
						</div>
						<div>
							<span>Created: </span>
							{courseData.creationDate && (
								<p>{dateConvert(courseData.creationDate)}</p>
							)}
						</div>
						<div>
							<span>Autors: </span>
							{allAuthors.length && (
								<p>{getAutors(courseData.authors, allAuthors)}</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
