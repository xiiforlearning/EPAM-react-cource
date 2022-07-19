import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { BUTTON_TEXT_LOGIN } from '../../constants';

import styles from './login.module.scss';
import { loginService } from '../../services';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginHandler = async (event) => {
		event.preventDefault();
		const userInfo = {
			email,
			password,
		};
		const areTrue = Object.values(userInfo).every((value) => value);
		if (areTrue) {
			const response = await loginService(userInfo);
			if (response.status === 201) {
				localStorage.setItem(
					'token',
					response.data.result.replace('Bearer ', '')
				);
				navigate('/courses');
				window.dispatchEvent(new Event('token'));
			}
		} else {
			alert('Please, fill in all fields');
		}
	};

	return (
		<form onSubmit={loginHandler} className={styles.wrapper}>
			<h2>Login</h2>
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
			<Button type='submit' text={BUTTON_TEXT_LOGIN} />

			<p>
				If you not have an account you can{' '}
				<Link to='/registration'>Register</Link>
			</p>
		</form>
	);
};

export default Login;
