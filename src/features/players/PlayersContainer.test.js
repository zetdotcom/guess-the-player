import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../redux/store';
import PlayersContainer from './PlayersContainer';
import { greenBg, cardBg, redBg } from '../../style';

const testPlayers = [
	{
		first_name: 'John',
		last_name: 'Doe',
		id: 1,
		fppg: 10,
		images: {
			default: {
				url: 'testurl',
			},
		},
	},
	{
		first_name: 'John',
		last_name: 'Doe2',
		id: 2,
		fppg: 20,
		images: {
			default: {
				url: 'testurl',
			},
		},
	},
	{
		first_name: 'John',
		last_name: 'Doe3',
		id: 3,
		fppg: 30,
		images: {
			default: {
				url: 'testurl',
			},
		},
	},
	{
		first_name: 'John',
		last_name: 'Doe4',
		id: 4,
		fppg: 40,
		images: {
			default: {
				url: 'testurl',
			},
		},
	},
	{
		first_name: 'John',
		last_name: 'Doe5',
		id: 5,
		fppg: 50,
		images: {
			default: {
				url: 'testurl',
			},
		},
	},
];

const renderComponent = newStore =>
	render(
		<Provider store={store(newStore)}>
			<PlayersContainer />
		</Provider>
	);

afterEach(cleanup);

describe('TEST PlayersContainer', () => {
	test('should match snapshot', () => {
		const { getByTestId, getByText, asFragment } = renderComponent();
		expect(asFragment).toMatchSnapshot();
	});

	test('should show two players on initial render', () => {
		const newState = {
			players: {
				playersList: testPlayers,
			},
		};
		const { getAllByTestId, getByText } = renderComponent(newState);

		const playersList = getAllByTestId('players-list-item');
		expect(playersList).toHaveLength(2);
	});

	test('should update checkbox correctly', () => {
		const { getByLabelText } = renderComponent();

		const radio2 = getByLabelText('2');
		const radio3 = getByLabelText('3');
		const radio5 = getByLabelText('5');

		expect(radio2).toBeChecked();
		fireEvent.click(radio3);
		expect(radio2).not.toBeChecked();
		expect(radio3).toBeChecked();
		expect(radio5).not.toBeChecked();
	});

	test('should show correct best player on click', () => {
		const newState = {
			players: {
				playersList: testPlayers.slice(0, 2),
			},
		};
		const { getAllByTestId, getByText } = renderComponent(newState);
		// const worsePlayer = getByText(/John Doe/i);
		// const betterPlayer = getByText(/John Doe2/i);
		const players = getAllByTestId('players-list-item');

		fireEvent.click(players[0]);
		expect(players[0]).toHaveStyle(`background:${redBg}`);
		expect(players[1]).toHaveStyle(`background:${greenBg}`);
	});
});
