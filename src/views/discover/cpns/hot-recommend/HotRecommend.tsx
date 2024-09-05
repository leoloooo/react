import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RecommendWrapper } from '@/views/discover/cpns/hot-recommend/style';
import AreaHeadder from '@/components/area-header-v1';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import SongItem from '@/components/song-item/songItem';

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  //拿数据
  const { hotRecommend } = useSelector((state: RootState) => ({
    hotRecommend: state.recommend.recommendList
  }));
  return (
    <RecommendWrapper>
      <AreaHeadder
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeadder>
      <div className="recommendList">
        {hotRecommend.map((item, index) => {
          return <SongItem key={index} itemData={item}></SongItem>;
        })}
      </div>
    </RecommendWrapper>
  );
};

export default memo(HotRecommend);
