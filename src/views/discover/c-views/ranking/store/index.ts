//封装获取数据,封装silice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllMusicList,
  getAllRank,
  getMusicListDetail
} from '@/views/discover/c-views/ranking/service';

//定义一下类型
interface IRankingState {
  rankDetails: any[];
  musicDetails: any;
  AllMusicList: any[];
}
const initialState: IRankingState = {
  rankDetails: [],
  musicDetails: {},
  AllMusicList: []
};
const RankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeAllMusicList(state, action) {
      state.AllMusicList = action.payload;
      console.log('打印state数据', state.AllMusicList);
    },
    changeRankNamePic(state, action) {
      state.rankDetails = action.payload;
    },
    changeMusicListDetail(state, action) {
      state.musicDetails = action.payload;
    }
  }
});

//异步获取数据
//获取热门推荐数据,已经写好网络请求,这里调用
//所有歌单详细歌曲
export const fetchAllMusicListAction = createAsyncThunk(
  'ranking',
  async (id: number, { dispatch }) => {
    const res = await getAllMusicList(id);
    dispatch(changeAllMusicList(res.songs));
  }
);
export const fetchAllRankingListAction = createAsyncThunk('ranking', async (arg, { dispatch }) => {
  const res = await getAllRank();
  dispatch(changeRankNamePic(res.list));
});
export const fetchMusicListDetailAction = createAsyncThunk(
  'ranking',
  async (id: number, { dispatch }) => {
    const res = await getMusicListDetail(id);
    dispatch(changeMusicListDetail(res));
  }
);

export default RankingSlice.reducer;
export const { changeAllMusicList, changeMusicListDetail, changeRankNamePic } =
  RankingSlice.actions;
