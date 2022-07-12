import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { BUTTON_TEXT_LOGIN } from '../../constants';

import styles from './login.module.scss';

const Login = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginHandler = (event) => {
		event.preventDefault();
		const userInfo = {
			name,
			email,
			password,
		};
		const areTrue = Object.values(userInfo).every((value) => value);
		if (areTrue) {
			axios
				.post('/login', userInfo)
				.then((response) => {
					localStorage.setItem(
						'token',
						response.data.result.replace('Bearer ', '')
					);
					navigate('/courses');
				})
				.catch((error) => {
					alert(`Error ========> ${error.response.data.errors[0]}`);
				});
		} else {
			alert('Please, fill in all fields');
		}
	};

	return (
		<form onSubmit={loginHandler} className={styles.wrapper}>
			<h2>Login</h2>
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
			<Button type='submit' text={BUTTON_TEXT_LOGIN} onClick={loginHandler} />

			<p>
				If you not have an account you can{' '}
				<Link to='/registration'>Register</Link>
			</p>
		</form>
	);
};

export default Login;
