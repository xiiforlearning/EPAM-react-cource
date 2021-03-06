import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { registerService } from '../../services/http.service';
import { BUTTON_TEXT_REGISTRATION } from '../../constants';

import styles from './registration.module.scss';

const Registration = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const createUserHandler = async (event) => {
		event.preventDefault();
		const newUser = {
			name,
			email,
			password,
		};
		const areTrue = Object.values(newUser).every((value) => value);
		if (areTrue) {
			const response = await registerService(newUser);
			if (response.status === 201) {
				navigate('/login');
			} else {
				alert(response.data.errors[0]);
			}
		} else {
			alert('Please, fill in all fields');
		}
	};

	return (
		<form onSubmit={createUserHandler} className={styles.wrapper}>
			<h2>Registration</h2>
			<Input
				value={name}
				labelText='Name'
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<Input
				value={email}
				type='email'
				labelText='Email'
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<Input
				value={password}
				type='password'
				labelText='Password'
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<Button type='submit' text={BUTTON_TEXT_REGISTRATION} />
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
};

export default Registration;
