import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {WINNING_SCORE} from '../../constants';

function UserDetailsContainer() {

  const userScore = useSelector(state => state.user.score);
  const userAttempts = useSelector(state => state.user.attempts)

  return (
    <div>
      {
        userScore >= WINNING_SCORE ? (
          <div>WINNER </div>
        ) : (
            <div>Score: {userScore}</div>
          )
      }
      <div>Attempts: {userAttempts}</div>
      <div>Accuracy: {userAttempts > 0 && (userScore / userAttempts * 100).toFixed() + '%'}</div>
    </div>
  )
};

export default UserDetailsContainer;