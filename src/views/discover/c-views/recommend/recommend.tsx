import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchNewAlbumAction,
  fetchRankingListAction,
  fetchRecommendDataAction,
  fetchSettleSingerAction,
  fetchTopBannersAction
} from '@/views/discover/c-views/recommend/store';
import { AppDispatch } from '@/store';
import TopBanner from '@/views/discover/cpns/top-banner/top-banner';
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style';
import HotRecommend from '@/views/discover/cpns/hot-recommend/HotRecommend';
import NewAlbum from '@/views/discover/cpns/newAlbum/newAlbum';
import TopRanking from '@/views/discover/cpns/topRanking/topRanking';
import UserLogin from '@/views/discover/cpns/user-login/userLogin';
import SetterSinger from '@/views/discover/cpns/settle-singer/setter-singer';
import HotAnchor from '@/views/discover/cpns/hot-anchor/HotAnchor';
import { getSongDetailAction } from '@/views/player/store/player';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  //发送事件的网络请求
  const dispatch = useDispatch<AppDispatch>();
  //副作用函数只会在组件挂载的时候执行一次
  useEffect(() => {
    dispatch(fetchTopBannersAction());
    dispatch(fetchRecommendDataAction());
    dispatch(fetchNewAlbumAction());
    dispatch(fetchRankingListAction(0));
    dispatch(fetchSettleSingerAction());
    dispatch(getSongDetailAction(1330348068));
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrapv2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking></TopRanking>
        </div>
        <div className="right">
          <UserLogin></UserLogin>
          <SetterSinger></SetterSinger>
          <HotAnchor></HotAnchor>
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
