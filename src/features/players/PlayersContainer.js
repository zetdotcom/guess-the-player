import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerCard from './PlayerCard';
import { incrementScore, incrementAttempts } from '../scoreboard/scoreboardSlice';
import { getRandomPlayers } from '../../utils'
import { WINNING_SCORE } from '../../constants';


function PlayersContainer() {

  const dispatch = useDispatch();
  const { playersList, loading } = useSelector(state => state.players);
  const { score, resets } = useSelector(state => state.scoreboard)
  const [randomPlayers, setRandomPlayers] = useState([]);
  const [numOfPlayers, setNumOfPlayers] = useState("2");
  const [showFppg, setShowFppg] = useState(false);
  const [hasChosenTheBest, setHasChosenTheBest] = useState(false)

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
    setRandomPlayers(getRandomPlayers(playersList, numOfPlayers))
  }


  function getMaxFppgId() {
    const maxObj = randomPlayers.reduce((max, player) => max?.fppg > player.fppg ? max : player, null)

    return maxObj.id;
  };


  function handleChosenTheBest(isTheBest) {
    setHasChosenTheBest(isTheBest);
    isTheBest && dispatch(incrementScore())
  };

  function handleCardClick(isTheBest) {
    if (!showFppg) {
      setShowFppg(true);
      handleChosenTheBest(isTheBest);
      dispatch(incrementAttempts());
    }
    else {
      handleRandomPlayers();
    }
  };

  return (
    <div>

      <div>
        <div>Select how many players to show:</div>
        <label>
          <input
            type="radio"
            name="players-number"
            value="2"
            checked={numOfPlayers === "2"}
            onChange={e => setNumOfPlayers(e.target.value)}
          />
          2
          </label>
        <label>
          <input
            type="radio"
            name="players-number"
            value="3"
            checked={numOfPlayers === "3"}
            onChange={e => setNumOfPlayers(e.target.value)}
          />
          3
    </label>
        <label>
          <input
            type="radio"
            name="players-number"
            value="5"
            checked={numOfPlayers === "5"}
            onChange={e => setNumOfPlayers(e.target.value)}
          />
          5
    </label>
        {/* <button onClick={() => setNumOfPlayers(3)}>show 3</button> */}
        <ul>

          {randomPlayers.map(player => (

            <li key={player.id}>
              <PlayerCard
                player={player}
                showFppg={showFppg}
                onClick={handleCardClick}
                maxFppgId={getMaxFppgId}
              />
            </li>
          ))}
        </ul>
        <button onClick={() => setRandomPlayers(getRandomPlayers(playersList, numOfPlayers))}>NEXT</button>
      </div>


      {/* <div>{hasChosenTheBest && 'HURRAY'}</div> */}
    </div>
  )
};


export default PlayersContainer;