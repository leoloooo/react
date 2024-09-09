import { combineReducers } from 'redux';
import counterReducer from './modules/counter';
import recommendReducer from '@/views/discover/c-views/recommend/store/index';
import playerReducer from '@/views/player/store/player';
import rankingReducer from '@/views/discover/c-views/ranking/store/index';

const rootReducer = combineReducers({
  counter: counterReducer,
  // other reducers
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
