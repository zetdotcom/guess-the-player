import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WINNING_SCORE } from '../../constants';
import { setWinner } from '../scoreboard/scoreboardSlice';

function ScoreboardDetailsContainer() {
	const dispatch = useDispatch();
	const { score, attempts } = useSelector(state => state.scoreboard);

	useEffect(
		() => {
			score >= WINNING_SCORE && dispatch(setWinner());
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[score]
	);

	return (
		<div>
			<div data-testid='score'>
				Score: {score} / {WINNING_SCORE}
			</div>
			<div data-testid='attempts'>Attempts: {attempts}</div>
			<div data-testid='accuracy'>Accuracy: {attempts > 0 && ((score / attempts) * 100).toFixed() + '%'}</div>
		</div>
	);
}

export default ScoreboardDetailsContainer;
