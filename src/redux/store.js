import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = state =>
	configureStore({
		reducer: rootReducer,
		preloadedState: state,
	});

export default store;
