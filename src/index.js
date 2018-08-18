/* eslint no-undef: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';

import configureStore from './configure_store';
import '../style/style.sass';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.container')
);
