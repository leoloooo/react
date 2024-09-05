import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingWrapper } from '@/views/discover/cpns/topRanking/top-ranking-item/style';
import { formatPicSize } from '@/utils/formatData';

interface IProps {
  itemData: any;
  children?: ReactNode;
}

const RankingItem: FC<IProps> = (props) => {
  const { itemData } = props;
  // 确保拿出来不是空数组
  const { tracks = [] } = itemData;
  return (
    <RankingWrapper>
      <div className="header">
        <div className="image">
          <img src={formatPicSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">
            1
          </a>
        </div>
        <div className="info">
          <a href="/todo">{itemData.name}</a>
          <button className="btn play sprite_02"></button>
          <button className="btn favor sprite_02"></button>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={index}>
              <div className="index">
                <span>{index + 1}</span>
              </div>
              <div className="info">
                <div className="text-nowrap name">{item.name}</div>
                <div className="operate">
                  <button className="btn play sprite_02"></button>
                  <button className="btn addto sprite_icon2"></button>
                  <button className="btn favor sprite_02"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a className="more" href="/todo">
          查看全部 &gt;
        </a>
      </div>
    </RankingWrapper>
  );
};

export default memo(RankingItem);
