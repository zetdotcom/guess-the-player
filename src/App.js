import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
import { fetchPlayers } from './features/players/playersSlice';
import PlayersContainer from './features/players/PlayersContainer';
import ScoreboardDetailsContainer from './features/scoreboard/ScoreboardDetailsContainer';
import Header from './components/Header';
import Button from './components/Button';
import { resetGame } from './features/scoreboard/scoreboardSlice';
import { GlobalStyle } from './style';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
	overflow: auto;
`;

function App() {
	const dispatch = useDispatch();
	const { isWinner } = useSelector(state => state.scoreboard);

	React.useEffect(() => {
		dispatch(fetchPlayers());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			<GlobalStyle />
			{isWinner ? (
				<div>YOU WON</div>
			) : (
				<>
					<Header />
					<PlayersContainer />
				</>
			)}
			<ScoreboardDetailsContainer />
			{isWinner && <Button onClick={() => dispatch(resetGame())}> Play AGAIN </Button>}
		</Wrapper>
	);
}

export default App;
