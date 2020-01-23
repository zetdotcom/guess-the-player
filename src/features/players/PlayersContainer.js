import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerCard from './PlayerCard';


function PlayersContainer() {

  const { playersList, loading } = useSelector(state => state.players);
  const [randomPlayers, setRandomPlayers] = useState([]);
  const [numOfPlayers, setNumOfPlayers] = useState(2);
  const [showFppg, setShowFppg] = useState(false);
  const [hasChosenTheBest, setHasChosenTheBest ] = useState(false)

  useEffect(() => {
    setRandomPlayers(getRandomPlayers(playersList, numOfPlayers))
  }, [numOfPlayers, playersList]);

  useEffect(() => {
    setShowFppg(false);
    setHasChosenTheBest(false);
  }, [randomPlayers])

  function getRandomPlayers(arr, n) {
    if (!arr.length) {
      return []
    }
    let result = [];
    let len = arr.length;
    let taken = [];
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  function getMaxFppg() {
    const max = Math.max(...randomPlayers.map(x => x.fppg));
    console.log("TCL: getMaxFppg -> max", max)
    return max;
    
  }

  const maxFppg = useCallback(() => getMaxFppg(), [randomPlayers])


  return (
    <div>
      {/* <div>{maxFppg}</div> */}
      <button onClick={getMaxFppg} >TEST</button>
      <button onClick={() => setNumOfPlayers(3)}>show 3</button>
      {randomPlayers.map(player => (

        <div key={player.id}>
          <PlayerCard 
            player={player}
            showFppg={showFppg} 
            onClick={(isTheBest) => {setShowFppg(true); setHasChosenTheBest(isTheBest)}}
            maxFppg={getMaxFppg}
          />
        </div>
      ))}
      <button onClick={() =>{ setRandomPlayers(getRandomPlayers(playersList, numOfPlayers))}}>NEXT</button>
      <div>{hasChosenTheBest && 'HURRAY'}</div>
    </div>
  )
};


export default PlayersContainer;