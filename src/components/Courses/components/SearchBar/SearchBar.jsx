import React from 'react';
import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	BUTTON_TEXT_ADD_COURSE,
	BUTTON_TEXT_SEARCH,
} from '../../../../constants';
import styles from './searchBar.module.scss';

const SearchBar = ({ addCourseOnClick }) => {
	return (
		<div className={styles.wrapper}>
			<form
				className={styles.form}
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<Input />
				<Button text={BUTTON_TEXT_SEARCH}></Button>
			</form>
			<Button text={BUTTON_TEXT_ADD_COURSE} onClick={addCourseOnClick}></Button>
		</div>
	);
};

export default SearchBar;
