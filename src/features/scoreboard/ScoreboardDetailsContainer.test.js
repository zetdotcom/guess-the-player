import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../redux/store';
import ScoreboardDetailsContainer from './ScoreboardDetailsContainer';

afterEach(cleanup);

const renderComponent = newStore =>
	render(
		<Provider store={store(newStore)}>
			<ScoreboardDetailsContainer />
		</Provider>
	);

describe('TEST ScoreboardDetailsContainer', () => {
	test('should match snaptshot', () => {
		const { asFragment } = renderComponent();

		expect(asFragment).toMatchSnapshot();
	});

	test('should be all zeros in initial scoreboard', () => {
		const { getByTestId } = renderComponent();

		const score = getByTestId('score');
		const attempts = getByTestId('attempts');
		const accuracy = getByTestId('accuracy');
		expect(score).toHaveTextContent('Score: 0 / 10');
		expect(attempts).toHaveTextContent('Attempts: 0');
		expect(accuracy).toHaveTextContent('Accuracy:');
	});

	test('should show correct scoreboard results', () => {
		const newState = {
			scoreboard: {
				score: 5,
				attempts: 10,
			},
		};
		const { getByTestId } = renderComponent(newState);

		const score = getByTestId('score');
		const attempts = getByTestId('attempts');
		const accuracy = getByTestId('accuracy');
		expect(score).toHaveTextContent('Score: 5 / 10');
		expect(attempts).toHaveTextContent('Attempts: 10');
		expect(accuracy).toHaveTextContent('Accuracy: 50%');
	});
});
