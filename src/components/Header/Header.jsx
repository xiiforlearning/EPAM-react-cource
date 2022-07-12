import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { BUTTON_TEXT_LOGOUT } from '../../constants';
import { Logo } from './components/Logo/Logo';
import styles from './header.module.scss';

const Header = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	useEffect(() => {
		const token = localStorage.getItem('token');
		const getMe = async () => {
			return await axios
				.get('/users/me', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((response) => {
					setName(response.data.result.name);
				});
		};
		getMe();
	}, [name]);

	const url = window.location.href;
	const isRegisterPage = url.includes('registration') || url.includes('login');
	return (
		<header className={styles.headerWrapper}>
			<Logo></Logo>
			{!isRegisterPage && (
				<div className={styles.headerItem}>
					<p>{name}</p>
					<Button
						text={BUTTON_TEXT_LOGOUT}
						onClick={() => {
							localStorage.removeItem('token');
							navigate('/login');
						}}
					></Button>
				</div>
			)}
		</header>
	);
};

export default Header;
