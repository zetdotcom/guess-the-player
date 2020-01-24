import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerCard from './PlayerCard';
import { incrementScore, incrementAttempts } from '../scoreboard/scoreboardSlice';
import { getRandomPlayers } from '../../utils';
import Button from '../../components/Button';
import PlayersRadioSelection from './PlayersRadioSelection';
import CardUlListDisplay from '../../components/CardUlListDisplay';

function PlayersContainer() {
	const dispatch = useDispatch();
	const { playersList, loading } = useSelector(state => state.players);
	const { score, resets } = useSelector(state => state.scoreboard);
	const [randomPlayers, setRandomPlayers] = useState([]);
	const [numOfPlayers, setNumOfPlayers] = useState('2');
	const [showFppg, setShowFppg] = useState(false);
	const [hasChosenTheBest, setHasChosenTheBest] = useState(false);

	// const playersList = playersListX.filter(x => x==="15475-9782" || "15475-9778" || "15475-18600" || "15475-23757")

	// useEffect(() => {
	//   console.log(playersList.map(x => {
	//     return {
	//       d: x.fppg,
	//       ID: x.id
	//     }
	//   }))
	// }, [playersList])

	useEffect(() => {
		handleRandomPlayers();
	}, [numOfPlayers, playersList]);

	useEffect(() => {
		setShowFppg(false);
		setHasChosenTheBest(false);
	}, [randomPlayers]);

	// useEffect(() => {
	//   resets > 0 && handleRandomPlayers()
	// }, [resets])

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
			<div>
				<div>Select how many players to show:</div>
				<PlayersRadioSelection numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers} />
				<div style={{ minHeight: '25px', fontWeight: 'lighter', padding: '5px', fontSize: '18px' }}>
					{showFppg && 'Click again to see next players'}
				</div>
				<CardUlListDisplay>
					{randomPlayers.map(player => (
						<li key={player.id}>
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

			{/* <div>{hasChosenTheBest && 'HURRAY'}</div> */}
		</div>
	);
}

export default PlayersContainer;
