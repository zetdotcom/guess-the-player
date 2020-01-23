import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchPlayers } from './features/players/playersSlice';
import PlayersContainer from './features/players/PlayersContainer';
import UserDetailsContainer from './features/userDetails/UserDetailsContainer';
import {GlobalStyle} from './style'
function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPlayers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div >
      <GlobalStyle />
      <PlayersContainer />
      <UserDetailsContainer />
    </div>
  );
}

export default App;
