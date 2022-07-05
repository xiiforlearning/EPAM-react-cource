import React from 'react';
import './textArea.module.scss';

const TextArea = ({ labelText, placeholder, onChange }) => {
	return (
		<label>
			{labelText}
			<textarea
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
