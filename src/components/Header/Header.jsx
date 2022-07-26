import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { BUTTON_TEXT_LOGOUT } from '../../constants';
import { logoutUserInfo } from '../../store/user/actions';
import { Logo } from './components/Logo/Logo';
import styles from './header.module.scss';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const name = useSelector((state) => state.user.name);

	return (
		<header className={styles.headerWrapper}>
			<Logo></Logo>
			{name && (
				<div className={styles.headerItem}>
					<p>{name}</p>
					<Button
						text={BUTTON_TEXT_LOGOUT}
						onClick={() => {
							dispatch(logoutUserInfo());
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
