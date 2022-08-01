import React from 'react';
import { create } from 'react-test-renderer';
import { mockedAuthorsList, mockedCoursesList } from '../../../../constants';
import CourseCard from './CourseCard';

const mockedUsedNavigate = jest.fn();
const mockedUsedSelector = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: () => mockedUsedSelector,
}));

describe('CourseCard test', () => {
	it('should render CourseCard component properly', () => {
		const component = create(
			<CourseCard
				title={mockedCoursesList[0].title}
				description={mockedCoursesList[0].description}
				creationDate={mockedCoursesList[0].creationDate}
				duration={mockedCoursesList[0].duration}
				authors={mockedCoursesList[0].authors}
				allAuthors={mockedAuthorsList}
				id={mockedCoursesList[0].id}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});
});
