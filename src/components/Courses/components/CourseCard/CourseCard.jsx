import React from 'react';

import styles from './courseCard.module.scss';
import { Button } from '../../../../common/Button/Button';
import { BUTTON_TEXT_SHOW_COURSE } from '../../../../constants';
import {
	dateConvert,
	getAutors,
	timeConvert,
} from '../../../../helpers/getCourseInfo';

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
	allAuthors,
}) => {
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
						<p>{getAutors(authors, allAuthors).join(', ')}</p>
					</div>
					<div>
						<span>Duration: </span>
						<p>{timeConvert(duration)}</p>
					</div>
					<div>
						<span>Created: </span>
						<p>{dateConvert(creationDate)}</p>
					</div>
				</div>
				<Button text={BUTTON_TEXT_SHOW_COURSE}></Button>
			</div>
		</div>
	);
};

export default CourseCard;
