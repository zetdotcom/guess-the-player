import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerCard from './PlayerCard';
import { incrementScore, incrementAttempts } from '../scoreboard/scoreboardSlice';
import { getRandomPlayers } from '../../utils';
import Button from '../../components/Button';
import PlayersRadioSelection from './PlayersRadioSelection';
import CardUlListDisplay from '../../components/CardUlListDisplay';

function PlayersContainer() {
	const dispatch = useDispatch();
	const { playersList } = useSelector(state => state.players);
	// const { score, resets } = useSelector(state => state.scoreboard);
	const [randomPlayers, setRandomPlayers] = useState([]);
	const [numOfPlayers, setNumOfPlayers] = useState('2');
	const [showFppg, setShowFppg] = useState(false);
	const [hasChosenTheBest, setHasChosenTheBest] = useState(false);

	useEffect(() => {
		handleRandomPlayers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [numOfPlayers, playersList]);

	useEffect(() => {
		setShowFppg(false);
		setHasChosenTheBest(false);
	}, [randomPlayers]);

	function handleRandomPlayers() {
		setShowFppg(false);
		setHasChosenTheBest(false);
		setRandomPlayers(getRandomPlayers(playersList, numOfPlayers));
	}

	function getMaxFppgId() {
		const maxObj = randomPlayers.reduce((max, player) => (max?.fppg > player.fppg ? max : player), null);

		return maxObj.id;
	}

	function handleChosenTheBest(isTheBest) {
		setHasChosenTheBest(isTheBest);
		isTheBest && dispatch(incrementScore());
	}

	function handleCardClick(isTheBest) {
		if (!showFppg) {
			setShowFppg(true);
			handleChosenTheBest(isTheBest);
			dispatch(incrementAttempts());
		} else {
			handleRandomPlayers();
		}
	}

	return (
		<div>
			<div>Select how many players to show:</div>
			<PlayersRadioSelection numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers} />
			<div style={{ minHeight: '25px', fontWeight: 'lighter', padding: '5px', fontSize: '18px' }}>
				{showFppg && 'Click again to see next players'}
			</div>
			<CardUlListDisplay data-testid='players-list'>
				{randomPlayers.map(player => (
					<li key={player.id} data-testid='players-list-item'>
						<PlayerCard
							player={player}
							showFppg={showFppg}
							handleCardClick={handleCardClick}
							maxFppgId={getMaxFppgId}
						/>
					</li>
				))}
			</CardUlListDisplay>
			<h4 style={{ color: hasChosenTheBest ? 'green' : 'red', minHeight: '25px' }}>
				{showFppg && (hasChosenTheBest ? 'CORRECT' : 'WRONG')}
			</h4>
			<Button onClick={() => setRandomPlayers(getRandomPlayers(playersList, numOfPlayers))}>NEXT</Button>
		</div>
	);
}

export default PlayersContainer;
