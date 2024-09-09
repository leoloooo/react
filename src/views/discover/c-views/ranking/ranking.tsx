import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingWrapper } from '@/views/discover/c-views/ranking/style';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';

import { RootState } from '@/store/rootReducer';
import { formatMonth, formatPicSize } from '@/utils/formatData';
import {
  fetchAllRankingListAction,
  fetchMusicListDetailAction
} from '@/views/discover/c-views/ranking/store';
import AreaHeadder from '@/components/area-header-v1';
import { Table, TableProps } from 'antd';

interface IProps {
  children?: ReactNode;
}

const Ranking: FC<IProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  //拿数据
  const { rankDetails, musicDetails } = useSelector((state: RootState) => ({
    rankDetails: state.ranking.rankDetails,
    musicDetails: state.ranking.musicDetails
  }));
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllRankingListAction());
    };
    fetchData();
  }, [dispatch]);
  //挂载的时候获取评论数
  useEffect(() => {
    if (rankDetails.length > 0 && rankDetails) {
      dispatch(fetchMusicListDetailAction(rankDetails[0].id));
    }
  }, [dispatch, rankDetails]);
  //解决刷新的时候第一条数据还是没拿到
  useEffect(() => {
    if (rankDetails.length > 0 && rankDetails) {
      setMusicData(rankDetails[0]);
    }
  }, [rankDetails]);

  interface partial {
    coverImgUrl: string;
    name: string;
    updateFrequency: string;
    id: number;
    subscribedCount: number;
    trackUpdateTime: number;
    updateTime: number;
    playCount: number;
    trackCount: number; //歌曲数量
  }
  //存点击拿到的数据
  const [musicData, setMusicData] = useState<Partial<partial>>({});
  //分割两部分
  const firstPart = rankDetails.slice(0, 4);
  const SecondPart = rankDetails.slice(4);
  //点击事件
  const handleItem = (item: any) => {
    setMusicData(item);
    dispatch(fetchMusicListDetailAction(item.id));
  };
  return (
    <RankingWrapper>
      <div className="content wrapv2">
        <div className="left">
          <div className="title">
            <h2 className="title">云音乐特色榜</h2>
            <ul>
              {firstPart.map((item, index) => {
                return (
                  <li className="item" key={index} onClick={() => handleItem(item)}>
                    <span>
                      <img src={formatPicSize(item.coverImgUrl, 40)} alt="#"></img>
                    </span>
                    <div className="desc">
                      <a href="/todo">{item.name}</a>
                      <p className="update">{item.updateFrequency}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h2 className="title">全球媒体榜</h2>
            <ul>
              {SecondPart.map((item, index) => {
                return (
                  <li className="item" key={index} onClick={() => handleItem(item)}>
                    <span>
                      <img src={formatPicSize(item.coverImgUrl, 40)} alt="#"></img>
                    </span>
                    <div className="desc">
                      <a href="/todo">{item.name}</a>
                      <p className="update">{item.updateFrequency}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="songListInfo">
              <div className="song-left">
                <img className="img" src={musicData.coverImgUrl} alt="#"></img>
              </div>
              <div className="song-right">
                <h2>{musicData.name}</h2>
                <span className="time">
                  最近更新: {formatMonth(musicData.updateTime as number)}
                </span>
                <span className="update">({musicData.updateFrequency})</span>
                <div className="btn">
                  {/* eslint-disable-next-line no-script-url */}
                  <span className="pl">播放</span>
                  <span className="pr"></span>
                  <span className="favor">({musicData.subscribedCount})</span>
                  <span className="share">({musicDetails?.shareCount})</span>
                  <span className="download">下载</span>
                  <span className="comments">({musicDetails?.commentCount})</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-top">
              <span>歌曲列表</span>
              <span>共{musicData.trackCount}首歌</span>
              <span>
                播放:<span>{musicData.playCount}</span>次
              </span>
            </div>
            <div className="bottom-bottom">
              <table cellPadding="10" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="p"></th>
                    <th>
                      <div className="title">标题</div>
                    </th>
                    <th className="time">时长</th>
                    <th className="singer">歌手</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="songRank">
                      <div>
                        <span>1</span>
                        <span>0</span>
                      </div>
                    </td>
                    <td className="musicName">
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${musicData.coverImgUrl})` }}
                      ></div>
                      <span>罗生门(flower)</span>
                    </td>
                    <td className="musicTime">
                      <div className="time" style={{ display: 'none' }}>
                        04:05
                      </div>
                      <div className="playbtn">
                        <span className="add"></span>
                        <span className="favor"></span>
                        <span className="share"></span>
                        <span className="download"></span>
                      </div>
                    </td>
                    <td className="singerName">cardiB</td>
                  </tr>
                  {/*后面的展示跟前三个不一样*/}
                  <tr>
                    <td className="songRank">
                      <div>
                        <span>1</span>
                        <span>0</span>
                      </div>
                    </td>
                    <td className="musicName1">
                      <span>青花</span>
                    </td>
                    <td className="musicTime">
                      <div className="time" style={{ display: 'none' }}>
                        04:05
                      </div>
                      <div className="playbtn">
                        <span className="add"></span>
                        <span className="favor"></span>
                        <span className="share"></span>
                        <span className="download"></span>
                      </div>
                    </td>
                    <td className="singerName">cardiB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </RankingWrapper>
  );
};

export default memo(Ranking);
