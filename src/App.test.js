import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { initialState, reducer } from './reducer.js'
import store from './redux/store';
import App from './App';

afterEach(cleanup);

const renderComponent = newStore =>
	render(
		<Provider store={store(newStore)}>
			<App />
		</Provider>
	);
describe('TEST APP rendering', () => {
	test('renders App initial screen', () => {
		const { getByText, asFragment } = renderComponent();
		const header = getByText(/FanDuel Points Per Game/i);
		const radios = getByText(/Select how many players to show/);
		expect(header).toBeInTheDocument();
		expect(radios).toBeInTheDocument();
		expect(asFragment()).toMatchSnapshot();
	});

	test('should render App for winner screen', () => {
		// const state = store().getState();
		const winnerState = {
			// ...state,
			scoreboard: {
				// ...state.scoreboard,
				score: 10,
				attempts: 10,
				isWinner: true,
			},
		};
		const { getByText, asFragment } = renderComponent(winnerState);
		const won = getByText(/YOU WON/);
		expect(won).toBeInTheDocument();
		expect(asFragment()).toMatchSnapshot();
	});
});
