import { configureStore } from '@reduxjs/toolkit';
import { authorInitialState } from './author/reducer';
import { courseInitialState } from './course/reducer';

import { rootReducer } from './rootReducer';
import { userInitialState } from './user/reducer';

const storeInitialState = {
	user: userInitialState,
	course: courseInitialState,
	author: authorInitialState,
};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: storeInitialState,
});

export default store;
