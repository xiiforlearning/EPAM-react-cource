import { combineReducers } from 'redux';
import authorReducer from './author/reducer';
import courseReducer from './course/reducer';

import userReducer from './user/reducer';

export const rootReducer = combineReducers({
	user: userReducer,
	course: courseReducer,
	author: authorReducer,
});
