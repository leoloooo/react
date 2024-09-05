import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { SetterSingerWrapper } from '@/views/discover/cpns/settle-singer/style';
import AreaHeaderRight from '@/components/area-header-right';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { formatPicSize } from '@/utils/formatData';

interface IProps {
  children?: ReactNode;
}

const SetterSinger: FC<IProps> = () => {
  const { settleSingers } = useSelector(
    (state: RootState) => ({
      settleSingers: state.recommend.settleSingers
    }),
    shallowEqual
  );
  return (
    <SetterSingerWrapper>
      <AreaHeaderRight title="入驻歌手" more="查看全部>" />
      <div className="artist-list">
        {settleSingers.map((item, index) => {
          return (
            <a href="#/discover/artist" key={item.id} className="artist">
              <img src={formatPicSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(' ')}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply">
        <a href="#/discover/artist">申请成为网易音乐人</a>
      </div>
    </SetterSingerWrapper>
  );
};

export default memo(SetterSinger);
