import React from 'react';
// import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import store from '../../redux/store';
import PlayerCard from './PlayerCard';
import { greenBg, cardBg, redBg } from '../../style';

const props = propsOverride => ({
	player: {
		first_name: 'John',
		last_name: 'Doe',
		id: 123,
		fppg: 100,
		images: {
			default: {
				url: 'testurl',
			},
		},
	},
	showFppg: false,
	handleCardClick: jest.fn(),
	maxFppgId: () => 123,
	...propsOverride,
});

afterEach(cleanup);

describe('TEST PlayerCard', () => {
	test('should match snapshot', () => {
		const { asFragment } = render(<PlayerCard {...props()} />);
		expect(asFragment).toMatchSnapshot();
	});

	test('should show correct details', () => {
		const { getByTestId, rerender } = render(<PlayerCard {...props()} />);
		const card = getByTestId('player-card');

		expect(card).toHaveTextContent('John Doe');
		expect(card).toHaveTextContent('FPPG: ??');
		expect(card).not.toHaveTextContent('100');

		rerender(<PlayerCard {...props({ showFppg: true })} />);
		expect(card).toHaveTextContent('FPPG: 100');
		expect(card).not.toHaveTextContent('FPPG: ??');
	});

	test('should show correct background on click', () => {
		const { getByTestId, rerender } = render(<PlayerCard {...props()} />);
		const card = getByTestId('player-card');

		expect(card).toHaveStyle(`background: ${cardBg}`);
		expect(card).not.toHaveStyle(`transoform: scale(1.07)`);

		fireEvent.click(card);
		expect(card).toHaveStyle(`background: ${greenBg}`);
		expect(card).toHaveStyle(`transform: scale(1.07)`);

		rerender(<PlayerCard {...props({ fppg: 2 })} />);
		fireEvent.click(card);
		expect(card).toHaveStyle(`background: ${redBg}`);
		expect(card).toHaveStyle(`transform: scale(1.07)`);
	});
});
