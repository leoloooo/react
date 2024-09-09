//封装获取数据,封装silice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getHotRecommends,
  getNewAlbums,
  getRankingList,
  getSettleSingers,
  getSongList,
  getTopBanners
} from '@/views/discover/c-views/recommend/service';
//定义一下类型
interface IRecommendState {
  totalNums: number;
  banners: any[];
  recommendList: any[];
  newAlbum: any[];
  upRanking: any;
  newRanking: any;
  originRanking: any;
  settleSingers: any[];
  HotmusicList: any[];
  cacheHotmusicList: { [key: number]: any };
  cat: string;
  rankNamePic: any[];
}
const initialState: IRecommendState = {
  banners: [], //轮播图
  recommendList: [], //热门推荐
  newAlbum: [], //新碟上架
  upRanking: {}, //飙升榜
  newRanking: {}, //新歌榜
  originRanking: {}, //原创榜
  settleSingers: [], //入驻歌手
  HotmusicList: [], //热门音乐
  cacheHotmusicList: {},
  totalNums: 0,
  cat: '全部',
  rankNamePic: []
};
const RecommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeCat(state, action) {
      state.cat = action.payload;
    },
    changeNums(state, action) {
      state.totalNums = action.payload;
    },
    changeCacheHotmusicList(state, action) {
      const { page, data } = action.payload;
      state.cacheHotmusicList[page] = data;
    },
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
    },
    changeHotmusicList(state, action) {
      state.HotmusicList = action.payload;
    },
    changeRankNamePic(state, action) {
      state.rankNamePic = action.payload;
      console.log(state.rankNamePic);
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
const AllRankingIdx = [3778678, 19723756, 3779629, 2884035];
export const fetchAllRankingListAction = createAsyncThunk(
  'ranking',
  async (idx: number, { dispatch }) => {
    for (let i = 0; i <= RankingIdx.length; i++) {
      const res = await getRankingList(AllRankingIdx[i]);
      console.log(res.playlist.name);
      console.log(res.playlist.coverImgUrl);
      // dispatch(changeRankingList(res.playlist));
    }
  }
);
//topList4个列表
// 定义接口来表示参数类型
interface FetchHotmusicListParams {
  cat: string;
  offset?: number;
  curpage: number;
}
//更新缓存数据到hotlist
export const updateHotmusicListAction = createAsyncThunk<void, FetchHotmusicListParams>(
  'recommend',
  async ({ curpage }, { dispatch }) => {
    const res = JSON.parse(sessionStorage.getItem(`HotmusicList_page_${curpage}`) || '[]');
    dispatch(changeHotmusicList(res));
  }
);
export const fetchHotmusicListAction = createAsyncThunk<void, FetchHotmusicListParams>(
  'recommend',
  async ({ curpage, cat = '全部', offset }, { dispatch }) => {
    const res = await getSongList(cat, offset);
    // 将获取到的分页数据存储到 sessionStorage，键名为 "HotmusicList_page_{curpage}"
    sessionStorage.setItem(`HotmusicList_page_${curpage}`, JSON.stringify(res.playlists));
    dispatch(changeHotmusicList(res.playlists));
    dispatch(changeNums(res.total));
    dispatch(changeCat(res.cat));
  }
);
//缓存下一页数据
export const fetchNextHotmusicListAction = createAsyncThunk<void, FetchHotmusicListParams>(
  'recommend',
  async ({ curpage, cat = 'hot', offset }, { dispatch }) => {
    const res = await getSongList(cat, offset);
    // 将获取到的分页数据存储到 sessionStorage，键名为 "HotmusicList_page_{curpage}"
    sessionStorage.setItem(`HotmusicList_page_${curpage + 1}`, JSON.stringify(res.playlists));
    dispatch(changeCacheHotmusicList({ page: curpage, data: res.playlists }));
  }
);
//导出后记得注册
export default RecommendSlice.reducer;
export const {
  changeCat,
  changeNums,
  changeCacheHotmusicList,
  changeHotmusicList,
  changeSettleSinger,
  changeRankingList,
  changeNewAlbum,
  changeRecommendList,
  changeBanners
} = RecommendSlice.actions;
