import React from 'react';
import { Button } from '../../../../common/Button/Button';
import {
	BUTTON_TEXT_ADD_AUTHOR,
	BUTTON_TEXT_DELETE_AUTHOR,
} from '../../../../constants';

import styles from './authorItem.module.scss';

const AuthorItem = ({ author, isAllAuthorsList, onClick }) => {
	return (
		<div className={styles.wrapper}>
			{author && <h3>{author.name}</h3>}
			<Button
				text={
					isAllAuthorsList ? BUTTON_TEXT_ADD_AUTHOR : BUTTON_TEXT_DELETE_AUTHOR
				}
				onClick={() => {
					onClick(author.id);
				}}
			/>
		</div>
	);
};

export default AuthorItem;
