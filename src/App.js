import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchPlayers } from './features/players/playersSlice';
import PlayersContainer from './features/players/PlayersContainer';

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPlayers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <PlayersContainer />
    </div>
  );
}

export default App;
