import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLyric, getSongDetail } from '@/views/player/services/player';
import { parseLyrics } from '@/utils/formatLyric';
//还要定义一个接口，用于描述当前播放歌曲的信息
interface CurrentSong {
  [propName: string]: any;
}
interface IplayerState {
  currentSong: any;
  playList: CurrentSong[]; // 播放列表，存放多首歌曲的信息
  currentIndex: number; // 当前播放的歌曲在播放列表中的索引
  lyrics: any[]; // 当前播放歌曲的歌词列表
  currentLyricIndex: number; // 当前显示的歌词在歌词列表中的索引
  currentShowLyric: string; // 当前显示的歌词
  playMode: number; // 播放模式
}
// 定义初始状态，命名为 initialPlayerState 以避免与接口冲突
const initialPlayerState: IplayerState = {
  currentSong: {}, // 当前播放歌曲的信息，使用默认值
  playList: [], // 播放列表，存放多首歌曲的信息
  currentIndex: -1, // 当前播放的歌曲在播放列表中的索引
  lyrics: [], // 当前播放歌曲的歌词列表
  currentLyricIndex: 0, // 当前显示的歌词在歌词列表中的索引
  currentShowLyric: '', // 当前显示的歌词
  playMode: 0 // 0顺序,1随机,2单曲
};
//异步获取歌曲
export const getSongDetailAction = createAsyncThunk(
  'player/getSongDetail',
  async (ids: number, { dispatch }) => {
    const res = await getSongDetail(ids);
    //歌词
    const lyric = await getLyric(ids);
    const song = res.songs[0];
    const Curlyric = parseLyrics(lyric.lrc.lyric);
    //放到currentsong里面
    dispatch(changeCurrentSong(song));
    //放到currentLyricList里面
    dispatch(changeCurrentLyricList(Curlyric));
  }
);
//获取歌曲

export const changeMusicAction = createAsyncThunk<any, boolean, any>(
  'changeMusic',
  (isNext: boolean, { dispatch, getState }) => {}
);

// 创建 playerSlice 用于管理播放器相关的状态
const playerSlice = createSlice({
  name: 'player', // slice 的名称
  initialState: initialPlayerState,
  reducers: {
    //改变playmode的值
    changePlayMode(state, action) {
      //第一次传1进来,playmode就是1
      state.playMode = (state.playMode + action.payload) % 3;
    },
    changeCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    //歌词
    changeCurrentLyricList(state, action) {
      state.lyrics = action.payload;
    },
    changeCurrentLyricIndex(state, action) {
      state.currentLyricIndex = action.payload;
    }
    // 这里可以添加 reducer 函数，例如更新当前歌曲、切换歌曲等
    // 示例:
    // setCurrentSong(state, action) {
    //   state.currentSong = action.payload;
    // }
  }
});

export default playerSlice.reducer;
// 可以导出 actions 以便在组件中使用
export const {
  changePlayMode,
  changeCurrentLyricIndex,
  changeCurrentLyricList,
  changeCurrentSong
} = playerSlice.actions;
