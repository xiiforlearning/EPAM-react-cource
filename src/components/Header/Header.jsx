import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { BUTTON_TEXT_LOGOUT } from '../../constants';
import store from '../../store';
import { logoutUserAction } from '../../store/user/thunk';
import { Logo } from './components/Logo/Logo';
import styles from './header.module.scss';

const Header = () => {
	const navigate = useNavigate();

	const name = useSelector((state) => state.user.name);
	const isAuth = useSelector((state) => state.user.token);

	return (
		<header className={styles.headerWrapper}>
			<Logo></Logo>
			{isAuth && (
				<div className={styles.headerItem}>
					<p>{!!name ? name : 'Admin'}</p>
					<Button
						text={BUTTON_TEXT_LOGOUT}
						onClick={() => {
							store.dispatch(logoutUserAction());
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
