import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WINNING_SCORE } from '../../constants';
import { setWinner } from '../scoreboard/scoreboardSlice';

function ScoreboardDetailsContainer() {

  const dispatch = useDispatch();
  const {score, attempts} = useSelector(state => state.scoreboard);
  
  useEffect(() => {
    score >= WINNING_SCORE && dispatch(setWinner())
  }, [score]);

  return (
    <div>
      {/* {
        userScore >= WINNING_SCORE ? (
          <>
            <div>WINNER </div>
            <button onClick={() => dispatch(resetScoreboard())}>dasda</button>
          </>
        ) : ( */}
            <div>Score: {score} / {WINNING_SCORE}</div>
          {/* )
      } */}
      <div>Attempts: {attempts}</div>
      <div>Accuracy: {attempts > 0 && (score / attempts * 100).toFixed() + '%'}</div>

    </div>
  )
};

export default ScoreboardDetailsContainer;