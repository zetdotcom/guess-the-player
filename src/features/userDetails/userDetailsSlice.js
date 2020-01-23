import {createSlice} from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
  name: 'user',
  initialState: {
    score: 0,
    attempts: 0
  },
  reducers: {
    // incrementScore(state) {return state.score + 1},
    incrementScore(state) {state.score++},
    incrementAttempts(state) {state.attempts++}
  }
})

const {actions, reducer} = userDetailsSlice;

export const {incrementScore, incrementAttempts} = actions;

export default reducer;