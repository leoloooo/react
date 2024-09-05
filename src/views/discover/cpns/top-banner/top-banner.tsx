import React, { ElementRef, memo, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from '@/views/discover/cpns/top-banner/style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { Carousel } from 'antd';
import classNames from 'classnames';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  //存一下轮播图切换的页面
  const [currentIndex, setCurrentIndex] = useState(0);
  //获取数据了从recommendstore
  const { banners } = useSelector((state: RootState) => ({
    banners: state.recommend.banners
  }));
  //箭头左右
  const NextClick = () => {
    bannerRef.current?.next();
  };

  const handleChange = (current: number) => {
    currentIndex !== current && setCurrentIndex(current);
  };
  //获取背景图片
  const bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20';
  // 预加载背景图片
  useEffect(() => {
    const img = new Image();
    img.src = bgImageUrl;
  }, [bgImageUrl]);
  //绑定轮播图组件
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}')
      center center/6000px`
      }}
    >
      <div className="banner wrapv2">
        <BannerLeft>
          <Carousel
            infinite={true}
            autoplay
            ref={bannerRef}
            effect={'fade'}
            afterChange={handleChange}
            dots={false}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="img" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span className={classNames('item', { active: index === currentIndex })}></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <span className="desc">PC 安卓 iPhone iPad Mac 六大客户端</span>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={() => bannerRef.current?.prev()}></button>
          <button className="btn right" onClick={NextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
