import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authorInitialState } from './author/reducer';
import { courseInitialState } from './course/reducer';
import { userInitialState } from './user/reducer';
import { rootReducer } from './rootReducer';

const storeInitialState = {
	user: userInitialState,
	course: courseInitialState,
	author: authorInitialState,
};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: storeInitialState,
	middleware: [thunk],
});

export default store;
