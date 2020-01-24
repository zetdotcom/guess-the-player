import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
import { fetchPlayers } from './features/players/playersSlice';
import PlayersContainer from './features/players/PlayersContainer';
import ScoreboardDetailsContainer from './features/scoreboard/ScoreboardDetailsContainer';
import Header from './components/Header'
import { resetGame } from './features/scoreboard/scoreboardSlice';
import { GlobalStyle } from './style'
function App() {

  const dispatch = useDispatch();
  const { isWinner } = useSelector(state => state.scoreboard)

  React.useEffect(() => {
    dispatch(fetchPlayers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    < >
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
      {isWinner && <button onClick={() => dispatch(resetGame())}> Play AGAIN </button>}
    </>
  );
}

export default App;
