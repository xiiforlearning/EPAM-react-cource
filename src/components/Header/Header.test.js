import React from 'react';
import { create } from 'react-test-renderer';
import Header from './Header';

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

describe('Header test', () => {
	it('should render Header component properly', () => {
		const component = create(<Header />);

		expect(component.toJSON()).toMatchSnapshot();
	});
});
