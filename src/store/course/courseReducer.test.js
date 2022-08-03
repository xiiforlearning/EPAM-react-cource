import courseReducer from './reducer';
import { ADD_NEW_COURSE } from './types';

describe('coursesReducer test', () => {
	it('should return initial state', () => {
		expect(courseReducer([], {})).toEqual([]);
	});

	it('should save course and return a new state', () => {
		const previousState = [];
		expect(
			courseReducer(previousState, {
				type: ADD_NEW_COURSE,
				payload: { title: 'Some course' },
			})
		).toEqual([{ title: 'Some course' }]);
	});
});
