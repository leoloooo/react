//封装获取数据,封装silice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getHotRecommends,
  getNewAlbums,
  getRankingList,
  getSettleSingers,
  getTopBanners
} from '@/views/discover/c-views/recommend/service';
//定义一下类型
interface IRecommendState {
  banners: any[];
  recommendList: any[];
  newAlbum: any[];
  upRanking: any;
  newRanking: any;
  originRanking: any;
  settleSingers: any[];
}
const initialState: IRecommendState = {
  banners: [], //轮播图
  recommendList: [], //热门推荐
  newAlbum: [], //新碟上架
  upRanking: {}, //飙升榜
  newRanking: {}, //新歌榜
  originRanking: {}, //原创榜
  settleSingers: [] //入驻歌手
};
const RecommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBanners(state, action) {
      state.banners = action.payload;
    },
    changeRecommendList(state, action) {
      state.recommendList = action.payload;
    },
    changeNewAlbum(state, action) {
      state.newAlbum = action.payload;
    },
    changeSettleSinger(state, action) {
      state.settleSingers = action.payload;
    },
    changeRankingList(state, action) {
      //根据不同name存储不同数据
      switch (action.payload.name) {
        case '飙升榜':
          state.upRanking = action.payload;
          break;
        case '新歌榜':
          state.newRanking = action.payload;
          break;
        case '原创榜':
          state.originRanking = action.payload;
          break;
        default:
          break;
      }
    }
  }
});

//异步获取数据
//获取热门推荐数据,已经写好网络请求,这里调用
export const fetchSettleSingerAction = createAsyncThunk('recommend', async (arg, { dispatch }) => {
  const res = await getSettleSingers(5);
  dispatch(changeSettleSinger(res.artists));
});
//获取新碟推介数据,已经写好网络请求,这里调用
export const fetchNewAlbumAction = createAsyncThunk('album', async (arg, { dispatch }) => {
  const res = await getNewAlbums(10);
  dispatch(changeNewAlbum(res.albums));
});
//获取轮播图数据
export const fetchRecommendDataAction = createAsyncThunk('recommend', async (arg, { dispatch }) => {
  const res = await getHotRecommends(8);
  dispatch(changeRecommendList(res.result));
});
export const fetchTopBannersAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getTopBanners();
  dispatch(changeBanners(res.banners));
});
//排名数据
const RankingIdx = [19723756, 3779629, 2884035];
export const fetchRankingListAction = createAsyncThunk(
  'ranking',
  async (idx: number, { dispatch }) => {
    for (let i = 0; i < RankingIdx.length; i++) {
      const res = await getRankingList(RankingIdx[i]);
      dispatch(changeRankingList(res.playlist));
    }
  }
);
//导出后记得注册
export default RecommendSlice.reducer;
export const {
  changeSettleSinger,
  changeRankingList,
  changeNewAlbum,
  changeRecommendList,
  changeBanners
} = RecommendSlice.actions;
