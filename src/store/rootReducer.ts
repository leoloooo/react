import { combineReducers } from 'redux';
import counterReducer from './modules/counter';
import recommendReducer from '@/views/discover/c-views/recommend/store/index';
import playerReducer from '@/views/player/store/player';

const rootReducer = combineReducers({
  counter: counterReducer,
  // other reducers
  recommend: recommendReducer,
  player: playerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
