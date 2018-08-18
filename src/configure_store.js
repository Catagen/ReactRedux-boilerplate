/* global window */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore() {
	const middlewares = [thunk];
	const enhancers = [applyMiddleware(...middlewares)];

	const composeEnhancers = (
		process.env.NODE_ENV !== 'production'
		&& typeof window === 'object'
		&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			shouldHotReload: false,
		})
		: compose;

	const store = createStore(
		reducers,
		composeEnhancers(...enhancers)
	);

	return store;
}
