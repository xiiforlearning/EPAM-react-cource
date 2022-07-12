import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import {
	dateConvert,
	getAutors,
	timeConvert,
} from '../../helpers/getCourseInfo';

import styles from './courseInfo.module.scss';

const CourseInfo = () => {
	const { id } = useParams();
	console.log(id);
	const [courseData, setCourseData] = useState({});
	const [allAuthors, setAllAuthors] = useState([]);
	useEffect(() => {
		const getCourseData = async () => {
			return await axios.get(`/courses/${id}`).then((response) => {
				setCourseData(response.data.result);
			});
		};
		getCourseData();
	}, [id]);

	useEffect(() => {
		const getAllAuthors = async () => {
			return await axios.get('/authors/all').then((response) => {
				setAllAuthors(response.data.result);
			});
		};
		getAllAuthors();
	}, []);

	return (
		<div className={styles.wrapper}>
			<Link to='/courses'>{'< Back to courses'}</Link>
			<div className={styles.mainInfo}>
				<h2 className={styles.title}>{courseData.title}</h2>
				<div>
					<p className={styles.description}>{courseData.description}</p>
					<div className={styles.courseInfo}>
						<div>
							<span>Autors: </span>
							{allAuthors.length && (
								<p>{getAutors(courseData.authors, allAuthors)}</p>
							)}
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
