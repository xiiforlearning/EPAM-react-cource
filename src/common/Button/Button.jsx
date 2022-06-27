import React from 'react';
import './button.module.scss';

export const Button = ({ text, onClick }) => (
	<button onClick={onClick}>{text}</button>
);
