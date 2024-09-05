import React, { ElementRef, memo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { AlbumWrapper } from '@/views/discover/cpns/newAlbum/style';
import AreaHeader from '@/components/area-header-v1';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import NewAlbumItem from '@/components/new-album-item/newAlbumItem';

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  //拿到组件的dom
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  //拿数据
  const { newAlbum } = useSelector((state: RootState) => ({
    newAlbum: state.recommend.newAlbum
  }));
  // 检查newAlbum是否为undefined或null
  if (!newAlbum || newAlbum.length === 0) {
    return <div>加载中...</div>; // 或者返回一个加载中的组件
  }
  return (
    <AlbumWrapper>
      <AreaHeader title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="arrow arrow-left" onClick={() => bannerRef.current?.prev()} />
        <div className="banner">
          <Carousel ref={bannerRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbum?.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album}></NewAlbumItem>;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button className="arrow arrow-right" onClick={() => bannerRef.current?.next()} />
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbum);
