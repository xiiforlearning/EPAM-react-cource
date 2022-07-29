import React from 'react';
import './textArea.module.scss';

const TextArea = ({ labelText, placeholder, onChange, value }) => {
	return (
		<label>
			{labelText}
			<textarea
				value={value}
				type='text'
				placeholder={
					placeholder ? `Enter ${placeholder}...` : `Enter ${labelText}...`
				}
				onChange={onChange}
			></textarea>
		</label>
	);
};

export default TextArea;
