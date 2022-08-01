import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import SearchBar from './components/SearchBar/SearchBar';
import Courses from './Courses';

const mockedState = {
	user: {
		role: 'admin',
		isAuth: true,
	},
	course: mockedCoursesList,
	author: mockedAuthorsList,
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Courses test', () => {
	it('should render Courses component properly', () => {
		const component = create(
			<Provider store={mockedStore}>
				<Courses />
			</Provider>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});

	it('courseform should be showed after a click on a button "Add New Course"', async () => {
		const component = create(
			<Provider store={mockedStore}>
				<SearchBar />
			</Provider>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});
});
