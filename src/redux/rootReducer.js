import {combineReducers} from 'redux';
import playersReducer from '../features/players/playersSlice';
import userDetailsReducer from '../features/userDetails/userDetailsSlice';

const rootReducer = combineReducers({
  players: playersReducer,
  user: userDetailsReducer
})

export default rootReducer;