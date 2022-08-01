import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import TextArea from '../../common/TextArea/TextArea';
import {
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_CREATE_COURSE,
} from '../../constants';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Timer from './components/Timer/Timer';

import styles from './courseForm.module.scss';
import store from '../../store';
import { addCourseAction, updateCourseAction } from '../../store/course/thunk';
import { addAuthorAction } from '../../store/author/thunk';

const CourseForm = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const allAuthors = useSelector((state) => state.author);
	const courses = useSelector((state) => state.course);
	const course = courses.find((course) => course.id === courseId);

	const [title, setTitle] = useState(courseId ? course.title : '');
	const [description, setDescription] = useState(
		courseId ? course.description : ''
	);
	const [newAuthor, setNewAuthor] = useState('');
	const [timer, setTimer] = useState(courseId ? course.duration : '');
	const [courseAuthors, setCourseAuthors] = useState(
		courseId ? course.authors : []
	);

	const deleteAuthorFromCourseAuthors = (authorId) => {
		setCourseAuthors(courseAuthors.filter((author) => author !== authorId));
	};

	const addToCourseAuthors = (authorId) => {
		setCourseAuthors((prev) => [...prev, authorId]);
	};

	const createCourseHandler = (isUpdate) => {
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
			if (isUpdate) {
				store.dispatch(
					updateCourseAction({ ...newCourse, id: courseId }, courseId)
				);
			} else {
				store.dispatch(addCourseAction(newCourse));
			}
			navigate('/courses');
		} else {
			alert('Please, fill in all fields');
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.topSection}>
				<Input
					value={title}
					labelText='Title'
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<Button
					text={courseId ? 'update' : BUTTON_TEXT_CREATE_COURSE}
					onClick={
						courseId
							? () => {
									createCourseHandler(true);
							  }
							: () => {
									createCourseHandler();
							  }
					}
				/>
				<Link to='/courses'>{'< Back to courses'}</Link>
			</div>
			<TextArea
				value={description}
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
							store.dispatch(
								addAuthorAction({ name: newAuthor, id: uuidv4() })
							);
							setNewAuthor('');
						}}
					/>
				</div>
				<div className={styles.authorsContainer}>
					<h3>Authors</h3>
					{allAuthors.map(
						(author) =>
							!courseAuthors.includes(author.id) && (
								<AuthorItem
									key={author.id}
									author={author}
									onClick={addToCourseAuthors}
									isAllAuthorsList={true}
								/>
							)
					)}
				</div>
				<div className={styles.durationContainer}>
					<h3>Duration</h3>
					<Input
						value={timer}
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
					{allAuthors.map(
						(author) =>
							courseAuthors.includes(author.id) && (
								<AuthorItem
									key={author.id}
									author={author}
									onClick={deleteAuthorFromCourseAuthors}
									isAllAuthorsList={false}
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseForm;
