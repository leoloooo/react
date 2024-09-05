import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingWrapper } from '@/views/discover/cpns/topRanking/style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { RootState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';
import RankingItem from '@/views/discover/cpns/topRanking/top-ranking-item/ranking-Item';

interface IProps {
  children?: ReactNode;
}

const TopRanking: FC<IProps> = () => {
  //拿数据
  const { upRanking, newRanking, originRanking } = useSelector((state: RootState) => ({
    upRanking: state.recommend.upRanking,
    newRanking: state.recommend.newRanking,
    originRanking: state.recommend.originRanking
  }));
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        <RankingItem itemData={upRanking}></RankingItem>
        <RankingItem itemData={newRanking}></RankingItem>
        <RankingItem itemData={originRanking}></RankingItem>
      </div>
    </RankingWrapper>
  );
};

export default memo(TopRanking);
