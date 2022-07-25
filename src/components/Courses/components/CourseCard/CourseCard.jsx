import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../common/Button/Button';
import { BUTTON_TEXT_SHOW_COURSE } from '../../../../constants';
import {
	dateConvert,
	getAutors,
	timeConvert,
} from '../../../../helpers/getCourseInfo';

import styles from './courseCard.module.scss';
import { removeCourse } from '../../../../store/course/actions';

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
	allAuthors,
	id,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authorsList = getAutors(authors, allAuthors).join(', ');

	return (
		<div className={styles.wrapper}>
			<div className={styles.courseDesc}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={styles.courseInfoWrapper}>
				<div className={styles.courseInfo}>
					<div>
						<span>Autors: </span>
						<p>{authorsList}</p>
					</div>
					<div>
						<span>Duration: </span>
						<p>{duration && timeConvert(duration)}</p>
					</div>
					<div>
						<span>Created: </span>
						<p>{creationDate && dateConvert(creationDate)}</p>
					</div>
				</div>
				<div className={styles.buttonsWrapper}>
					<Button
						text={BUTTON_TEXT_SHOW_COURSE}
						onClick={() => {
							navigate(`/courses/${id}`);
						}}
					/>
					<Button
						text='delete'
						onClick={() => {
							dispatch(removeCourse(id));
						}}
					/>
					<Button text='update' onClick={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
