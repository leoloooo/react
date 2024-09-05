import type { FC, ReactNode } from 'react';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Control, Operator, PlayerBarWrapper, PlayInfo } from '@/views/player/app-player-bar/style';
import { Link } from 'react-router-dom';
import { message, Slider } from 'antd';
import { RootState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';
import { formatMinuteSecond, formatPicSize, formatTime } from '@/utils/formatData';
import { getSongPlayUrl } from '@/views/discover/c-views/recommend/service';
import {
  changeCurrentLyricIndex,
  changeMusicAction,
  changePlayMode
} from '@/views/player/store/player';
import { useDispatch } from 'react-redux';

interface IProps {
  children?: ReactNode;
}

const PlayerBar: FC<IProps> = () => {
  //拿store里面的歌曲信息
  const { currentSong, lyrics, lyricIndex, playmode } = useSelector((state: RootState) => ({
    currentSong: state.player.currentSong,
    lyrics: state.player.lyrics,
    lyricIndex: state.player.currentLyricIndex,
    playmode: state.player.playMode
  }));
  //播放器
  let intervalid: any;
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [state, setState] = useState(1);
  //播放进度
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  //进度条改变
  const handleSliderChange = (value: number) => {
    //value是当前值百分比
    const currentTime = (value / 100) * audioRef.current!.duration;
    audioRef.current!.currentTime = currentTime;
    setProgress(value);
  };
  //挂载歌曲
  useEffect(() => {
    const prepareSong = async () => {
      try {
        // 获取歌曲 URL
        const res = await getSongPlayUrl(currentSong.id);
        const songUrl = res.data[0].url;
        setDuration(formatMinuteSecond(res.data[0].time));
        console.log('歌曲地址', res.data[0]);
        //设置音源
        audioRef.current!.src = songUrl;
        console.log('音频准备完毕');
      } catch (err) {
        console.log('音频准备是吧', err);
      }
    };

    prepareSong();
  }, [currentSong]);

  //切换歌曲
  const changeMusic = (isNext = true) => {
    dispatch(changeMusicAction(isNext) as any);
    console.log('切换歌曲');
  };

  //播放音乐
  const handlePlayClick = async () => {
    try {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current?.play();
        setIsPlaying(true);
      }
    } catch (err) {
      setIsPlaying(false);
      console.log('播放失败', err);
    }
  };
  const togglerClick = () => {
    setState((state) => (state === 0 ? 1 : 0));
    handlePlayClick();
  };
  //播放模式
  const handleLoopChange = () => {
    dispatch(changePlayMode(1));
  };
  //播放进度
  function handleTime(e: any) {
    setProgress((e.target.currentTime / e.target.duration) * 100);
    // 清理之前的定时器
    if (intervalid) {
      clearInterval(intervalid);
    }
    intervalid = setInterval(() => {
      const cur = e.target.currentTime;
      const dur = e.target.duration;
      setCurrentTime(formatTime(cur));
      // 如果播放结束，清理定时器
      if (cur >= dur) {
        clearInterval(intervalid);
        intervalid = null; // 重置为 null
      }
    }, 1000);
    let index = lyrics.length - 1;
    console.log('歌词666', lyrics);
    //循环拿歌词
    for (let i = 0; i < lyrics.length; i++) {
      if (e.target.currentTime * 1000 < lyrics[i].time) {
        //找到歌词时间大于当前时间的歌词-1就是目标歌词
        index = i - 1;
        break;
      }
    }
    if (lyricIndex === index || index === -1) return;
    dispatch(changeCurrentLyricIndex(index));
    //展示歌词
    message.open({
      key: 'lyric',
      content: lyrics[index].text,
      duration: 0,
      className: 'lyric-message'
    });
  }
  return (
    <PlayerBarWrapper className="playBar">
      <div className="content wrapv2">
        <Control state={state}>
          <button className="prev playBar btn" onClick={() => changeMusic(false)}></button>
          <button
            className="play playBar btn"
            onClick={() => {
              togglerClick();
            }}
          ></button>
          <button className="next playBar btn" onClick={() => changeMusic(true)}></button>
        </Control>
        <PlayInfo>
          <Link to="/player">
            <img className="img" src={formatPicSize(currentSong?.al?.picUrl, 50)} alt="#" />
          </Link>
          <div className="info">
            <div className="song">
              <div className="song-name">{currentSong.name}</div>
              <div className="singer-name">{currentSong?.ar?.[0]?.name}</div>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={handleSliderChange} />
              <div className="time">
                <div className="current">{currentTime}</div>
                <div className="divider">/</div>
                <div className="duration">{duration}</div>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator playmode={playmode}>
          <div className="left">
            <button className="btn pip sprite_icon2"></button>
            <button className="btn favor playBar"></button>
            <button className="btn share playBar"></button>
          </div>
          <div className="right playBar">
            <button className="btn volume playBar"></button>
            <button className="btn loop playBar" onClick={handleLoopChange}></button>
            <button className="btn playlist playBar"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTime}></audio>
    </PlayerBarWrapper>
  );
};

export default memo(PlayerBar);
