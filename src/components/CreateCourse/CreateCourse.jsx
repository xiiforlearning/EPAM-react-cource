import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import TextArea from '../../common/TextArea/TextArea';
import {
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_CREATE_COURSE,
} from '../../constants';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Timer from './components/Timer/Timer';
import styles from './createCourse.module.scss';

const CreateCourse = ({
	setCourses,
	addCourseOnClick,
	courses,
	authors,
	setAuthors,
}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [timer, setTimer] = useState('');
	const [allAuthors, setAllAuthors] = useState(authors);
	const [courseAuthors, setCourseAutors] = useState([]);

	useEffect(() => {
		setAllAuthors(authors);
	}, [authors]);

	const createCourseHandler = () => {
		const newCourse = {
			id: uuidv4(),
			title,
			description,
			creationDate: new Date().toLocaleDateString(),
			duration: +timer,
			authors: courseAuthors,
		};
		const areTrue = Object.values(newCourse).every((value) => value);
		if (areTrue) {
			setCourses([...courses, newCourse]);
			addCourseOnClick(true);
		} else {
			alert('Please, fill in all fields');
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.topSection}>
				<Input
					labelText='Title'
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<Button
					text={BUTTON_TEXT_CREATE_COURSE}
					onClick={createCourseHandler}
				/>
			</div>
			<TextArea
				labelText='Description'
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<div className={styles.additionalInfoWrapper}>
				<div className={styles.addAuthorContainer}>
					<h3>Add Author</h3>
					<Input
						value={newAuthor}
						labelText='Author name'
						onChange={(e) => {
							setNewAuthor(e.target.value);
						}}
					/>
					<Button
						text={BUTTON_TEXT_CREATE_AUTHOR}
						onClick={() => {
							setAuthors([...authors, { name: newAuthor, id: uuidv4() }]);
							setNewAuthor('');
						}}
					/>
				</div>
				<div className={styles.authorsContainer}>
					<h3>Authors</h3>
					{allAuthors.map((author) => (
						<AuthorItem
							key={author.id}
							author={author}
							courseAuthors={courseAuthors}
							setAllAuthors={setAllAuthors}
							allAuthors={allAuthors}
							setCourseAutors={setCourseAutors}
							isAllAuthorsList={true}
						/>
					))}
				</div>
				<div className={styles.durationContainer}>
					<h3>Duration</h3>
					<Input
						labelText='Duration'
						placeholder='Duration in minutes'
						onChange={(e) => {
							const minutes = e.target.value.replace(/\D/g, '');
							setTimer(minutes);
						}}
					/>
					<Timer timer={timer} />
				</div>
				<div className={styles.courseAuthorsContainer}>
					<h3>Course Authors</h3>
					{courseAuthors.map((author) => (
						<AuthorItem
							key={author.id}
							author={author}
							courseAuthors={courseAuthors}
							setAllAuthors={setAllAuthors}
							allAuthors={allAuthors}
							setCourseAutors={setCourseAutors}
							isAllAuthorsList={false}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
