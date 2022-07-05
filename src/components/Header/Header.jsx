import React from 'react';
import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { BUTTON_TEXT_LOGOUT, MOCK_NAME } from '../../constants';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.headerWrapper}>
			<Logo></Logo>
			<div className={styles.headerItem}>
				<p>{MOCK_NAME}</p>
				<Button text={BUTTON_TEXT_LOGOUT}></Button>
			</div>
		</header>
	);
};

export default Header;
