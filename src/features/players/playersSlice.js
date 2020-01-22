import { createSlice } from '@reduxjs/toolkit';
import { getPlayers } from '../../apiCalls/playersApi';



const playersSlice = createSlice({
  name: 'players',
  initialState: {
    playersList: [],
    loading: false,
    error: false
  },
  reducers: {
    requestPlayers(state) { state.loading = true },
    receivePlayers(state, action) {
      const players = action.payload;
      state.playersList = players;
      state.loading = false;
    }
  }
});

const {actions, reducer} = playersSlice;

export function fetchPlayers() {
  return function(dispatch) {
    dispatch(requestPlayers());
    // console.log(getPlayers())
    return getPlayers().then(data => dispatch(receivePlayers(data)));
  }
}

export const {requestPlayers, receivePlayers} = actions;
export default reducer;