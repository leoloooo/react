import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { SongItemWrapper } from '@/components/song-item/style';
import { formatNumber, formatPicSize } from '@/utils/formatData';

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const SongItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <SongItemWrapper>
      <div className="top">
        <img src={formatPicSize(itemData.picUrl, 140)} alt="#" />
        <div className="cover image_cover">
          <div className="info">
            <span className="left count">{formatNumber(itemData.playCount)}</span>
            <i className="right play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </SongItemWrapper>
  );
};

export default memo(SongItem);
