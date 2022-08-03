import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from '../../../../constants';
import CourseCard from './CourseCard';

const mockedState = {
	user: {
		role: 'admin',
	},
	course: mockedCoursesList,
	author: mockedAuthorsList,
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('test <CourseCard />', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<CourseCard
						title={mockedState.course[0].title}
						description='123desc'
						creationDate={mockedState.course[0].creationDate}
						duration={mockedState.course[0].duration}
						authors={mockedState.course[0].authors}
						allAuthors={mockedState.author}
						id={mockedState.course[0].id}
					/>
				</Provider>
			</BrowserRouter>
		);
	});

	test('should display title', () => {
		expect(screen.queryByText('JavaScript')).toBeInTheDocument();
	});

	test('should display description', () => {
		expect(screen.queryByText('123desc')).toBeInTheDocument();
	});

	test('should display authors', () => {
		expect(
			screen.queryByText('Vasiliy Dobkin, Nicolas Kim')
		).toBeInTheDocument();
	});

	test('should display duration', () => {
		expect(screen.queryByText('2 : 40 hours')).toBeInTheDocument();
	});

	test('should display created date', () => {
		expect(screen.queryByText('08.03.2021')).toHaveTextContent('08.03.2021');
	});
});
