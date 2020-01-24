import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { initialState, reducer } from './reducer.js'
import store from './redux/store';
import App from './App';

const renderComponent = () =>
	render(
		<Provider store={store}>
			<App />>
		</Provider>
	);
// function renderWithRedux(
//   ui,
//   {{}, store = store} = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{ui}</Provider>),
//     // adding `store` to the returned utilities to allow us
//     // to reference it in our tests (just try to avoid using
//     // this to test implementation details).
//     store,
//   }
// }

test('renders App link', () => {
	const { getByText } = renderComponent();
	const header = getByText(/FanDuel Points Per Game/i);
	const radios = getByText(/Select how many players to show/);
	expect(header).toBeInTheDocument();
	expect(radios).toBeInTheDocument();
});
