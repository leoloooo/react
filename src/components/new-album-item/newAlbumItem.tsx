import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AlbumWrapper } from '@/components/new-album-item/style';
import { formatPicSize } from '@/utils/formatData';

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <AlbumWrapper>
      <div className="top">
        <img src={formatPicSize(itemData.picUrl, 100)} alt="#" />
        <a href="/todo" className="cover image_cover" aria-hidden="true">
          mask
        </a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbumItem);
