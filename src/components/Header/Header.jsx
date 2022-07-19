import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { BUTTON_TEXT_LOGOUT } from '../../constants';
import { Logo } from './components/Logo/Logo';
import styles from './header.module.scss';

const Header = ({ name }) => {
	const navigate = useNavigate();

	return (
		<header className={styles.headerWrapper}>
			<Logo></Logo>
			{!!name && (
				<div className={styles.headerItem}>
					<p>{name}</p>
					<Button
						text={BUTTON_TEXT_LOGOUT}
						onClick={() => {
							localStorage.removeItem('token');
							navigate('/login');
							window.dispatchEvent(new Event('token'));
						}}
					></Button>
				</div>
			)}
		</header>
	);
};

export default Header;
