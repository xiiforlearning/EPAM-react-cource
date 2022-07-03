import React from 'react';
import { Button } from '../../../../common/Button/Button';
import {
	BUTTON_TEXT_ADD_AUTHOR,
	BUTTON_TEXT_DELETE_AUTHOR,
} from '../../../../constants';

import styles from './authorItem.module.scss';

const AuthorItem = ({
	author,
	courseAuthors,
	setAllAuthors,
	allAuthors,
	setCourseAutors,
	isAllAuthorsList,
}) => {
	const addAutorToCourse = () => {
		setCourseAutors([...courseAuthors, author]);
		setAllAuthors(allAuthors.filter((item) => item.id !== author.id));
	};

	const removeAuthorFromCourse = () => {
		setAllAuthors([...allAuthors, author]);
		setCourseAutors(courseAuthors.filter((item) => item.id !== author.id));
	};
	return (
		<div className={styles.wrapper}>
			{author && <h3>{author.name}</h3>}
			<Button
				text={
					isAllAuthorsList ? BUTTON_TEXT_ADD_AUTHOR : BUTTON_TEXT_DELETE_AUTHOR
				}
				onClick={() => {
					isAllAuthorsList ? addAutorToCourse() : removeAuthorFromCourse();
				}}
			/>
		</div>
	);
};

export default AuthorItem;
