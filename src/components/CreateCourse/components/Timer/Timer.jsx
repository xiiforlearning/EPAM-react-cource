import React from 'react';
import { timeConvert } from '../../../../helpers/getCourseInfo';

const Timer = ({ timer }) => {
	return <div>{`Duration: ${timeConvert(timer)}`}</div>;
};

export default Timer;
