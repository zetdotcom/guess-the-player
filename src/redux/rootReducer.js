import {combineReducers} from 'redux';
import playersReducer from '../features/players/playersSlice';

const rootReducer = combineReducers({
  players: playersReducer
})

export default rootReducer;