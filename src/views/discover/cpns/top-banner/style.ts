//styled components
import styled from 'styled-components';
//引入图片
import download from '@/assess/imgs/download_sprite.png';
import arrow from '@/assess/imgs/arrow.png';
export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`;
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .img {
      width: 100%;
    }
  }
  .dots {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    .item {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      cursor: pointer;
      &:hover {
        //拿theme里的颜色
        background-color: ${(props) => props.theme.color.primaryColor};
      }
      &.active {
        background-color: ${(props) => props.theme.color.primaryColor};
        //保证红点不向上移动
        position: relative;
        top: 1px;
      }
    }
  }
  //移动箭头
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    position: absolute;
    top: 50%;
  }

  .ant-carousel .slick-prev {
    left: 20px; /* 自定义左侧位置 */
    color: red; /* 调整颜色 */
  }

  .ant-carousel .slick-next {
    right: 20px; /* 自定义右侧位置 */
  }
`;
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  position: relative;
  width: 254px;
  height: 270px;
  background: url(${download});
  .desc {
    position: absolute;
    bottom: 5px;
    left: 23px;
    right: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
  }
`;
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${arrow});
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
