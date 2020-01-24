import {combineReducers} from 'redux';
import playersReducer from '../features/players/playersSlice';
import scoreboardReducer from '../features/scoreboard/scoreboardSlice';

const rootReducer = combineReducers({
  players: playersReducer,
  scoreboard: scoreboardReducer
})

export default rootReducer;