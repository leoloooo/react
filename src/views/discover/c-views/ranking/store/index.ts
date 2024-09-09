//封装获取数据,封装silice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllRank, getMusicListDetail } from '@/views/discover/c-views/ranking/service';

//定义一下类型
interface IRankingState {
  rankDetails: any[];
  musicDetails: any;
}
const initialState: IRankingState = {
  rankDetails: [],
  musicDetails: {}
};
const RankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
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

export const fetchAllRankingListAction = createAsyncThunk('ranking', async (arg, { dispatch }) => {
  const res = await getAllRank();
  dispatch(changeRankNamePic(res.list));
  console.log(res.list);
});
export const fetchMusicListDetailAction = createAsyncThunk(
  'ranking',
  async (id: number, { dispatch }) => {
    const res = await getMusicListDetail(id);
    dispatch(changeMusicListDetail(res));
  }
);

export default RankingSlice.reducer;
export const { changeMusicListDetail, changeRankNamePic } = RankingSlice.actions;
