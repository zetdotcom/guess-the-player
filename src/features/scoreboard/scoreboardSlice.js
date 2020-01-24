import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  attempts: 0,
  isWinner: false
}

const scoreboardDetailsSlice = createSlice({
  name: 'scoreboard',
  initialState: initialState,
  reducers: {
    // incrementScore(state) {return state.score + 1},
    incrementScore(state) { state.score++ },
    incrementAttempts(state) { state.attempts++ },
    setWinner(state) { state.isWinner = true },
    resetGame(state) {
      state.score = 0
      state.attempts = 0
      state.isWinner = false
    }
  }
})

const { actions, reducer } = scoreboardDetailsSlice;

export const { incrementScore, incrementAttempts, resetGame, setWinner } = actions;

export default reducer;