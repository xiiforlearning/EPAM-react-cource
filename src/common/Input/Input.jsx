import React from 'react';
import './input.module.scss';

const Input = ({ labelText, placeholder, onChange, value, type }) => {
	return (
		<label>
			{labelText}
			<input
				id={labelText}
				type={type ? type : 'text'}
				placeholder={
					placeholder ? `Enter ${placeholder}...` : `Enter ${labelText}...`
				}
				onChange={onChange}
				value={value}
			></input>
		</label>
	);
};

export default Input;
